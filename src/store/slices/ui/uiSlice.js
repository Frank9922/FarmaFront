import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        
    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
    }
});


// Action creators are generated for each case reducer function
export const { increment } = uiSlice.actions;
