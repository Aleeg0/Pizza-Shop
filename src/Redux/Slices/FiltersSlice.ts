import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "../Store.ts";

export const categories: string[] = [
  "All",
  "Meat",
  "Vegetarian",
  "Grill",
  "Spicy"
]

export const sortByValues: {name: string,value: string}[] = [
  {
    name: "by alphabet",
    value: "title"
  },
  {
    name: "by rating",
    value: "rating",
  },
  {
    name: "by price",
    value: "price"
  },
  {
    name: "by price (decreasing)",
    value: "-price"
  }
]


export interface filtersState {
  categoryId: number,
  sortBy: {name: string,value: string},
  searchValue: string,
}

const initialState: filtersState  = {
  categoryId: 0,
  sortBy: sortByValues[0],
  searchValue: "",
}

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSortBy: (state, action: PayloadAction<{name: string,value: string}>) => {
      state.sortBy = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    }
  },
})

export const selectFilters = (state: RootState) => state.filter;
export const {setCategory, setSortBy, setSearchValue} = filtersSlice.actions;

export default filtersSlice.reducer;
