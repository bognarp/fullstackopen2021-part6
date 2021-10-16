import React from 'react';
import { updateFilter } from '../reducers/filterReducer';
import { connect } from 'react-redux';

const Filter = (props) => {

  const handleChange = ({ target }) => {
    props.updateFilter(target.value);
  };
  const style = {
    marginBottom: 10,
  };
  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

const connectedFilter = connect(null, { updateFilter })(Filter);

export default connectedFilter;
