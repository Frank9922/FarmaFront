import { createSlice } from '@reduxjs/toolkit';
import { estados } from './estados';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        id: null,
        estado: estados.chequeando,
        displayName: null,
        email: null,
        photoUrl: null,
        errorResponse: {}
    },  
    reducers: {
        checkingCredentials: (state) => {
            state.errorResponse = null,
            state.estado = estados.chequeando
        },

        login: (state, { payload } ) => {
            state.id = payload.id,
            state.estado = estados.autenticado
            state.displayName = payload.name
            state.email = payload.email
            state.photoUrl = payload.profile_picture
        },

        errorResponse: (state, {payload}) => {
            state.estado = estados.noAutenticado,
            state.errorResponse = payload
        },

        logout: (state, {payload}) => {
            state.id = null,
            state.estado = estados.noAutenticado,
            state.displayName = null,
            state.email = null,
            state.photoUrl = null
            state.errorResponse= payload
        },

        clearErrorResponse: (state) => {
            state.errorResponse = null
        }

    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials, errorResponse, clearErrorResponse} = authSlice.actions;
