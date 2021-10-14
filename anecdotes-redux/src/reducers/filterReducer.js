const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.content;
    default:
      return state;
  }
};

export const updateFilter = (content) => {
  return {
    type: 'SET_FILTER',
    content,
  };
};

export default filterReducer;
