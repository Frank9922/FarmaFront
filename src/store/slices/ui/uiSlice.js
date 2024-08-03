import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        theme: 'light'

    },
    reducers: {


        toggleTheme: (state ) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';        
        },


    }
});


// Action creators are generated for each case reducer function
export const { toggleTheme } = uiSlice.actions;
