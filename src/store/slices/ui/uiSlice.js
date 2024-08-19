import { createSlice } from '@reduxjs/toolkit';

const historial = JSON.parse(localStorage.getItem('historial'));

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        loaderGeneral: false,
        theme: 'light',
        historial: historial || [],
        menuOpen: 'false',

    },
    reducers: {

        loaderActive: (state) => {
            console.log('Iniciado el loader')
            state.loaderGeneral = true;
        },
        loaderDisabled: (state) => {
            console.log('Loader disabled')
            state.loaderGeneral = false;
        },

        toggleTheme: (state ) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';        
        },

        toggleMenu: (state) => {
            state.menuOpen = state.menuOpen === 'true' ? 'false' : 'true';
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
export const { toggleTheme, addHistorial, toggleMenu, loaderActive, loaderDisabled } = uiSlice.actions;
