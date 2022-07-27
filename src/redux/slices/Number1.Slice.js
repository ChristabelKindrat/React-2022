import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    number1: 0
}

const number1Slice = createSlice({
    name: 'number1Slice',
    initialState,
    reducers: {
        inc: (state, action) => {
            ++state.number1},
        dec:(state,action)=>{
            --state.number1},
        res:(state,action)=>{
            state.number1 = 0
        },

    }
})

const {reducer:number1Reducer, actions:{inc,dec,res}}= number1Slice

const number1Actions ={
    inc,
    dec,
    res
};

export {number1Reducer,number1Actions};

