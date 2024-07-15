import  { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from './slices/ui'
import { authSlice } from './slices/auth'
import { checkApi } from './apis/checkApi'

export const store = configureStore({
    reducer: {
        ui : uiSlice.reducer,
        auth: authSlice.reducer,


        [checkApi.reducerPath] : checkApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(checkApi.middleware)
})