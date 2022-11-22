import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: "list-slice",
    initialState: {
        list: [
            {
                id: "1",
                title: "First"
            },
            {
                id: "2",
                title: "Second"
            },
            {
                id: "3",
                title: "Third"
            }
        ]
    },
    reducers : {
        removeItem: ((state, remove)=>{
            const a = state.list.filter((item)=>{
                return item.id !== remove.payload //Check type
            })
            console.log(remove);
        })
        
    }
})
export const {removeItem} = listSlice.actions