import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {number1Reducer} from "./slices";

const rootReducer = combineReducers({
    number1Reducer
});

const setupStore = () => configureStore({
    reducer:rootReducer
});

export
{
    setupStore
};