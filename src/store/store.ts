import { configureStore } from "@reduxjs/toolkit";
// Import your reducers here
import counterReducer from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// ✅ Infer types for state & dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
