import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
    name: "calculator-slice",
    initialState: {
        value : 0,
        generatedObj: {
            inc: "",
            dec: ""
        }
    },
    reducers : {
        incrementVal: ((state, action)=>{
            state.value = state.value +  action.payload;
        }),
        decrementVal: ((state, action)=>{
            state.value = state.value -  action.payload;
        }),
        updatedVal: ((state, action)=>{
            state.generatedObj = action.payload;
        })
    }
})
export const {incrementVal, decrementVal, updatedVal} = calculatorSlice.actions