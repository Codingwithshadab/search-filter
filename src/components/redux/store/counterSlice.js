import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter-slice",
    initialState: {
        value: 0
    },
    reducers: {
        incrementeVal : (state)=>{ 
            state.value +=1;
        }
    }
})
export const {incrementeVal} = counterSlice.actions;