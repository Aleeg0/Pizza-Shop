import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartPizza} from "../Types/ICartPizza.ts";
import {ICartItem} from "../Types/ICartItem.ts";


export interface ICartState {
  totalSum: number,
  totalCount: number,
  items: ICartItem[]
}

const initialState: ICartState = {
  totalSum: 0,
  totalCount: 0,
  items: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartPizza>) => {
      const cartItem = state.items.find((item) =>
        (item.item.title === action.payload.title
          && item.item.sizes === action.payload.sizes
          && item.item.types === action.payload.types)
      )
      // if we found item with same size and type of thickness
      if (cartItem) {
        cartItem.count++;
      } // if we didn't creating new cartItem
      else {
        state.items.push(
          {
            id: Math.floor(Math.random()*1000),
            item: action.payload,
            count: 1,
          });
      }
      // updating total values
      state.totalCount++;
      state.totalSum += action.payload.price;
    }
  }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;