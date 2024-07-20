import {ICartPizza} from "./ICartPizza.ts";

export interface ICartItem {
  id: number,
  item: ICartPizza,
  count: number
}