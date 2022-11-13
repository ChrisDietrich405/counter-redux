import { combineReducers } from "redux";
import { loggedReducer } from "./isLogged";
import { counterReducer } from "./counter";

export const allReducers = combineReducers({
    loggedIn: loggedReducer,
    counter: counterReducer
})