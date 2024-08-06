import { createSlice } from '@reduxjs/toolkit';

const historial = JSON.parse(localStorage.getItem('historial'));

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        theme: 'light',
        historial: historial || []

    },
    reducers: {


        toggleTheme: (state ) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';        
        },

        addHistorial: (state, { payload }) => {

            const existe = state.historial.some(item => JSON.stringify(item.compatibilidad.id) === JSON.stringify(payload.compatibilidad.id));
            if (!existe) {
                state.historial.push(payload);
            }
        }


    }
});


// Action creators are generated for each case reducer function
export const { toggleTheme, addHistorial } = uiSlice.actions;
