import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
    event: eventReducer,
    modals: modalReducer
})

export default rootReducer