import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: "list-slice",
    initialState: {
        list: [
            {
                id: "1",
                title: "An item"
            },
            {
                id: "2",
                title: "A second item"
            },
            {
                id: "3",
                title: "A third item "
            },
            {
                id: "4",
                title: "A fourth item "
            },
            {
                id: "5",
                title: "And a fifth one "
            }
        ]
    },
    reducers : {
        removeItem: ((state, remove)=>{
            const itemId = remove.payload;
            state.list = state.list.filter((item)=>{
                return item.id !== itemId;
            })            
        })
        
    }
})
export const {removeItem} = listSlice.actions