import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState{
    quantities: Record<number, number>
}

const initialState: IInitialState = {
    quantities: {}
}



const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        add: (state, action:PayloadAction<{id: number}>) => {
            if(state.quantities[action.id]){
                state.quantities[action.id] = 1
            } else {
               state.quantities[action.id]++ 
            }
        },
        decrese: (state, action:PayloadAction<{id: number}>) => {
            if(state.quantities[action.id]){
                state.quantities[action.id] -= 1
            } else {
               state.quantities[action.id] = 0 
            }
        }
    }
})


export const {add, decrese} = itemSlice.actions

export default itemSlice.reducer