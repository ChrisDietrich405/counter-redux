import { ACTIONS } from "../actions"

const initialState = {
  login: false
}

export const loggedReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTIONS.LOGGEDIN: 
      return !state
    case ACTIONS.LOGOUT:
      return state
    default: 
      return state
  }
}