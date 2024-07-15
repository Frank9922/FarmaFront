import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const checkApi = createApi({
    reducerPath: 'check',

    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            headers.set('Content-Type', 'application/json');
            headers.set('Accept', 'application/json');

            if(token && token.length > 0) {
                const fulltoken= token.replaceAll('"', '')
                headers.set('Authorization', `Bearer ${fulltoken}`)

            }
            return headers;
        }
    }),

    endpoints: (builder) => ({
    
        getCompa: builder.query({
            query: (args) => {
                const {farma1, farma2 } = args

                return {
                    url: `/comparar-farmacos/${farma1}/${farma2}`
                }
            }
        }),

        getFarmacos: builder.query({
            query: () => `/farmacos`,
          }),

    })
})
export const { useGetCompaQuery, useGetFarmacosQuery } = checkApi;