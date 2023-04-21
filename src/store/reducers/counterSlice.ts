import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Rootstate } from './index'

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        },
        reset: (state) => {
            console.log(state.value)
            state.value = 0
        }
    }
});


export const { increment, decrement, incrementByAmount, decrementByAmount, reset } = counterSlice.actions;

export const selectCount = (state: Rootstate) => state.counter.value;

export default counterSlice.reducer;