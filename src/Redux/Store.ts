import {configureStore} from "@reduxjs/toolkit";
import filterReducer from "./Slices/FiltersSlice"

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
