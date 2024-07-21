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
    addItemToCart: (state, action: PayloadAction<ICartPizza>) => {
      const cartItem = state.items.find((item) =>
        (item.item.title === action.payload.title
          && item.item.size === action.payload.size
          && item.item.type === action.payload.type)
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
      state.totalSum = Math.round(state.totalSum * 100) / 100;
    },
    removeItemFromCartById: (state, action: PayloadAction<number>) => {
      const cartItem = state.items.find(item => item.id === action.payload);
      if (cartItem) {
        cartItem.count--;
        cartItem.item.price;
        state.totalSum -=cartItem.item.price;
        state.totalSum = Math.round(state.totalSum * 100) / 100;
        state.totalCount--;
      }
      else {
        throw new Error("item did not be found");
      }
      // if count 0 removing object
      if (cartItem.count === 0) {
        state.items = state.items.filter(item => item.id !== cartItem.id);
      }
    },
    removeAllItemsFromCartById: (state, action: PayloadAction<number>) => {
      const cartItem = state.items.find(item => item.id === action.payload);
      if (cartItem) {
        state.totalSum -= cartItem.item.price * cartItem.count;
        state.totalSum = Math.round(state.totalSum * 100) / 100;
        state.totalCount -= cartItem.count;
      }
      else {
        throw new Error("item did not be found");
      }
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.totalCount = 0;
      state.totalSum = 0.0;
      state.items = [];
    }
  }
})

export const {addItemToCart, removeItemFromCartById,removeAllItemsFromCartById,clearCart} = cartSlice.actions;

export default cartSlice.reducer;