import { configureStore } from '@reduxjs/toolkit'
import  BarSlice from './barStore'
import { apiSlice } from './api/apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    BarSlice:BarSlice,
    [apiSlice.reducerPath]:apiSlice.reducer,
  },
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware),
})

setupListeners(store.dispatch)