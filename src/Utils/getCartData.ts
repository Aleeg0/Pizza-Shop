import {CartState} from "../Redux/Slices/CartSlice.ts";

export const getCartData = (): CartState  => {
  const data = localStorage.getItem("cartData")
  return data ? JSON.parse(data) as CartState : {
      totalSum: 0,
      totalCount: 0,
      items: []
    };
}