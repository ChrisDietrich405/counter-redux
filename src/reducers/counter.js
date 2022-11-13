import { ACTIONS } from "../actions";

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + action.payload;
    case ACTIONS.DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};
