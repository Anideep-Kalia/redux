import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});


// only for ts
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
