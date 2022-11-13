export const ACTIONS = {
  LOGGEDIN: "LOGGEDIN",
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  LOGOUT: "LOGOUT",
};

export const loginAction = () => {
  return {
    type: ACTIONS.LOGGEDIN,
  };
};

export const logoutAction = () => {
  return {
    type: ACTIONS.LOGOUT,
  };
};

export const increment = (num) => {
  return {
    type: ACTIONS.INCREMENT,
    payload: num,
  };
};

export const decrement = (num) => {
  return {
    type: ACTIONS.DECREMENT,
    payload: num,
  };
};
