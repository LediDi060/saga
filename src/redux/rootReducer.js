import { combineReducers } from "redux";
import { appReduser } from "./appReduser";
import { postReducer } from "./postReduser";

export const rootReducer = combineReducers({
    posts:postReducer,
    app:appReduser

})