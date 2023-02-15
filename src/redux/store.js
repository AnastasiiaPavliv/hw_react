import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer, postReducer} from "./slices";

const rootReducer=combineReducers({
    users: userReducer,
    posts: postReducer
});
const setupStore =()=> configureStore({
    reducer: rootReducer
});
export {setupStore}