import { createSlice } from '@reduxjs/toolkit';

const historial = JSON.parse(localStorage.getItem('historial'));

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        loaderGeneral: false,
        theme: 'light',
        historial: historial || [],
        menuOpen: 'false',
        modalAbm: null,

    },
    reducers: {

        loaderActive: (state) => {
            state.loaderGeneral = true;
        },
        loaderDisabled: (state) => {
            state.loaderGeneral = false;
        },

        toggleTheme: (state ) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';        
        },

        toggleNavbar: (state) => {
            state.menuOpen = state.menuOpen === 'true' ? 'false' : 'true';
        },

        openNavbar: (state) => {
            state.menuOpen = 'true';
        },

        closeNavbar: (state) => {
            state.menuOpen = 'false';
        },

        addHistorial: (state, { payload }) => {

            const existe = state.historial.some(item => JSON.stringify(item.compatibilidad.id) === JSON.stringify(payload.compatibilidad.id));
            if (!existe) {
                state.historial.push(payload);
            }
        },

        clearHistorial :(state) => {

            state.historial = [];

            localStorage.removeItem('historial');


        },

        openModal: (state, {payload}) => {

            state.modalAbm = payload

        },

    }
});


// Action creators are generated for each case reducer function
export const { toggleTheme, addHistorial, toggleNavbar, loaderActive, loaderDisabled, openNavbar, closeNavbar, clearHistorial} = uiSlice.actions;
