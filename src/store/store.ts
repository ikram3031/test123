import { configureStore } from "@reduxjs/toolkit"
import platesReducer from "./platesSlice"

export const store = configureStore({
  reducer: {
    plates: platesReducer,
  },
})

// ✅ Infer types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
