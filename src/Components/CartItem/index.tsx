import {FC} from "react";
import {useDispatch} from "react-redux";
import {
  addItemToCart, removeAllItemsFromCartById,
  removeItemFromCartById
} from "../../Redux/Slices/CartSlice.ts";
import {ICartPizza} from "../../Redux/Types/ICartPizza.ts";
import {RemoveCartItemSvg,DecrementCartItemSvg,IncrementCartItemSvg} from "../SVGC";
import styles from "../../Styles/Components/_cartPizza.module.scss"

interface ICartPizzaProps {
  id: number,
  item: ICartPizza,
  count: number
}

export const CartPizza: FC<ICartPizzaProps> = ({id,item,count}) => {
  const dispatch = useDispatch();

  const onDecrementClick = () => {
    dispatch(removeItemFromCartById(id));
  }

  const onIncrementClick = () => {
    dispatch(addItemToCart(item));
  }

  const onRemoveClick = () => {
    dispatch(removeAllItemsFromCartById(id));
  }

  return (
    <div className={styles.cartPizza}>
      <div className={styles.pizza}>
        <img src={`/Pizza-Shop${item.imgURL}`} alt="pizza"/>
        <div className={styles.title}>
          <h3>{item.title}</h3>
          <div className={styles.filters}>
            <p>{item.type}, </p>
            <p> {item.size} sm</p>
          </div>
        </div>
      </div>
      <div className={styles.controls}>
        <button
          disabled={count === 1}
          className={styles.decrementBtn}
          onClick={onDecrementClick}
        >
          <DecrementCartItemSvg/>
        </button>
        <b>{count}</b>
        <button
          className={styles.incrementBtn}
          onClick={onIncrementClick}
        >
          <IncrementCartItemSvg/>
        </button>
      </div>
      <b>{(item.price * count).toFixed(2)} $</b>
      <button
        className={styles.removeBtn}
        onClick={onRemoveClick}
      >
        <RemoveCartItemSvg/>
      </button>
    </div>
);
};