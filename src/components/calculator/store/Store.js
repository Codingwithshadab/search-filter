import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { listSlice } from "../../list-redux/listSlice";
import { calculatorSlice } from "./calculatorSlice";
const allReducers = combineReducers({
    calculatorSlice: calculatorSlice.reducer,
    listSlice: listSlice.reducer
})
export const store = configureStore({ 
    reducer : allReducers,
    devTools: process.env.NODE_ENV !== "production"
})