const initialState = {
  message: '',
  timeOutId: null,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data;
    case 'RESET_NOTIFICATION':
      return initialState;
    default:
      return state;
  }
};

const createNotification = (message, timeOutId) => {
  return {
    type: 'SET_NOTIFICATION',
    data: {
      message,
      timeOutId,
    },
  };
};

const resetNotification = () => {
  return {
    type: 'RESET_NOTIFICATION',
  };
};

export const setNotification = (message, timeToDisplay) => {
  return (dispatch, getState) => {
    const { notification } = getState();

    const autoReset = setTimeout(() => {
      dispatch(resetNotification());
    }, timeToDisplay * 1000);

    dispatch(createNotification(message, autoReset));

    if (notification.timeOutId !== null) {
      clearTimeout(notification.timeOutId);
    }
  };
};

export default notificationReducer;
