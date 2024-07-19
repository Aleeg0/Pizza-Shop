import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../Store.ts";
import {filtersState} from "./FiltersSlice.ts";

export interface IPizza {
  id: number,
  title: string,
  imgURL: string,
  types: number[],
  sizes: number[],
  price: number,
  category: number,
  rating: number
}

export const fetchPizzas =
  createAsyncThunk<IPizza[], filtersState, { state: RootState }>("pizzas/fetchPizzas", async (params) => {
    const {categoryId, sortBy,searchValue} = params;
    const urlParams = new URLSearchParams();
    urlParams.append("sortBy", sortBy.value);
    if (categoryId) {
      urlParams.append("category", categoryId.toString());
    }
    if (searchValue) {
      urlParams.append("title", `*${searchValue}*`);
    }
    const {data} = await axios.get(`https://daa000b52605539c.mokky.dev/pizzas?${urlParams}`);
    return data;
  })

export interface pizzaState {
  pizzas: IPizza[],
  loading: 'idle' | 'pending' | 'succeeded' | 'failed',
}

const initialState: pizzaState = {
  pizzas: [],
  loading: "idle"
}

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setPizzas: (state, action: PayloadAction<IPizza[]>) => {
      state.pizzas = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.loading = "pending";
      state.pizzas = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state,action) => {
      state.loading = "succeeded";
      state.pizzas = action.payload;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.loading = "failed";
      state.pizzas = [];
    })
  }
})

export const {setPizzas} = pizzasSlice.actions;

export default pizzasSlice.reducer;