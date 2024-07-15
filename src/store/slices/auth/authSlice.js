import { createSlice } from '@reduxjs/toolkit';
import { estados } from './estados';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        id: null,
        estado: estados.noAutenticado,
        displayName: null,
        email: null,
        photoUrl: null
    },  
    reducers: {
        checkingCredentials: (state) => {
            state.estado = estados.chequeando
        },

        login: (state, { payload } ) => {
            state.id = payload.id,
            state.estado = estados.autenticado
            state.displayName = payload.name
            state.email = payload.email
            state.photoUrl = payload.photoUrl
        },
        logout: (state) => {
            state.id = null,
            state.estado = estados.noAutenticado,
            state.displayName = null,
            state.email = null,
            state.photoUrl = null
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
