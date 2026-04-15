import { createSlice } from "@reduxjs/toolkit";

 export interface Todo{
    id: number,
    text:string,
    status: "green" | "red"
}

interface data{
    value : Todo[];
}

const initialState : data = { 
    value: []
}

const TodoDataSlice = createSlice({
    name: "dataSlice",
    initialState,
    reducers:{
        addData:(state,action)=>{
            state.value.push(action.payload)
        }
    }
})

export const {addData} = TodoDataSlice.actions;
export default TodoDataSlice.reducer;