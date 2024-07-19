import filterReducer from "./Slices/FiltersSlice"
import pizzasReducer from "./Slices/PizzasSlice.ts";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    pizzas: pizzasReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
