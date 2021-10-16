import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { upvoteAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const filteredAnecdotes = anecdotes.filter((a) => {
      return a.content.toLowerCase().includes(filter.toLowerCase());
    });

    return filter.length > 0
      ? filteredAnecdotes.sort(
          (objA, objB) => objB.votes - objA.votes
        )
      : anecdotes.sort((objA, objB) => objB.votes - objA.votes);
  });
  const dispatch = useDispatch();

  const vote = (anecdote) => {
    dispatch(upvoteAnecdote(anecdote));
    dispatch(setNotification(`you voted '${anecdote.content}'`, 5));
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
