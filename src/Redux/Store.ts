import {configureStore} from "@reduxjs/toolkit";
import filterReducer from "./Slices/FiltersSlice"
import pizzasReducer from "./Slices/PizzasSlice.ts";
import pagesReducer from "./Slices/PagesSlice.ts";


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    pizzas: pizzasReducer,
    pages: pagesReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
