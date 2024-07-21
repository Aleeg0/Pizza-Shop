import RemoveCartItemSvg from "../SVGS/removeCartItemSvg.tsx";
import DecrementCartItemSvg from "../SVGS/decrementCartItemSvg.tsx";
import IncrementCartItemSvg from "../SVGS/incrementCartItemSvg.tsx";
import styles from "../../Styles/Components/_cartPizza.module.scss"
import {ICartPizza} from "../../Redux/Types/ICartPizza.ts";
import {FC} from "react";
import {useDispatch} from "react-redux";
import {
  addItemToCart, removeAllItemsFromCartById,
  removeItemFromCartById
} from "../../Redux/Slices/CartSlice.ts";

interface ICartPizzaProps {
  id: number,
  item: ICartPizza,
  count: number
}

const CartPizza: FC<ICartPizzaProps> = ({id,item,count}) => {
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
    <div className={styles.CartPizza}>
      <div className={styles.pizza}>
        <img src="/pizzasImg/pizza-6.png" alt="pizza"/>
        <div className={styles.title}>
          <h3>{item.title}</h3>
          <p>{item.type}, {item.size} sm</p>
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

export default CartPizza;