import {configureStore} from "@reduxjs/toolkit";
import filterReducer from "./Slices/FiltersSlice"
import pizzasReducer from "./Slices/PizzasSlice.ts";
import pagesReducer from "./Slices/PagesSlice.ts";
import cartReducer from "./Slices/CartSlice.ts";


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    pizzas: pizzasReducer,
    pages: pagesReducer,
    cart: cartReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
