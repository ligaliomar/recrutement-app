import { configureStore } from '@reduxjs/toolkit'
import candidatesReducer from './candidateSlice'

export const store = configureStore({
  reducer: {
    candidates: candidatesReducer,
  },
})