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

export const createNotification = (message) => {
  return {
    type: 'SET_NOTIFICATION',
    message,
  };
};

export const resetNotification = () => {
  return {
    type: 'RESET_NOTIFICATION',
  };
};

export default notificationReducer;
