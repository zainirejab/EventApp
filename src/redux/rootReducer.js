import { combineReducers } from "redux";
import asyncReducer from "./asyncReducer";
import eventReducer from "./eventReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
    event: eventReducer,
    modals: modalReducer,
    async: asyncReducer
})

export default rootReducer