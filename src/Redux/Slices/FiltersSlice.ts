import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
    name: "by popularity",
    value: "popularity",
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
  searchText: string,
}

const initialState: filtersState  = {
  categoryId: 0,
  sortBy: sortByValues[0],
  searchText: "",
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
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    }
  },
})

export const {setCategory, setSortBy, setSearchText} = filtersSlice.actions;

export default filtersSlice.reducer;
