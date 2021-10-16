const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.message;
    case 'RESET_NOTIFICATION':
      return '';
    default:
      return state;
  }
};

const createNotification = (message) => {
  return {
    type: 'SET_NOTIFICATION',
    message,
  };
};

const resetNotification = () => {
  return {
    type: 'RESET_NOTIFICATION',
  };
};

export const setNotification = (message, timeToDisplay) => {
  return (dispatch) => {
    dispatch(createNotification(message));
    setTimeout(() => {
      dispatch(resetNotification());
    }, timeToDisplay * 1000);
  };
};

export default notificationReducer;
