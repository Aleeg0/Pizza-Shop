import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ILoadingStatus} from "../Types/ILoadingStatus.ts";
import {IPizza} from "../Types/IPizzas.ts";
import {fetchPizzas} from "../fetchPizzas.ts";
import {MokkyResponse} from "../Types/MokkyResponse.ts";

export interface pizzaState {
  pizzas: IPizza[],
  loading: ILoadingStatus
}

const initialState: pizzaState = {
  pizzas: [],
  loading: ILoadingStatus.IDLE
}

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setPizzas: (state, action: PayloadAction<IPizza[]>) => {
      state.pizzas = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.loading = ILoadingStatus.PENDING;
    });
    builder.addCase(fetchPizzas.fulfilled, (state,action: PayloadAction<MokkyResponse>) => {
      state.loading = ILoadingStatus.SUCCEEDED;
      state.pizzas = action.payload.items;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.loading = ILoadingStatus.FAILED;
      state.pizzas = [];
    });
  }
})

export const {setPizzas} = pizzasSlice.actions;

export default pizzasSlice.reducer;