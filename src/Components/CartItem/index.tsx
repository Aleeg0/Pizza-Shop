import RemoveCartItemSvg from "../SVGS/removeCartItemSvg.tsx";
import DecrementCartItemSvg from "../SVGS/decrementCartItemSvg.tsx";
import IncrementCartItemSvg from "../SVGS/incrementCartItemSvg.tsx";
import styles from "../../Styles/Components/_cartPizza.module.scss"
import {ICartPizza} from "../../Redux/Types/ICartPizza.ts";
import {FC} from "react";

interface ICartPizzaProps {
  id: number,
  item: ICartPizza,
  count: number
}

const CartPizza: FC<ICartPizzaProps> = ({id,item,count}) => {

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
        <button className={styles.decrementBtn}>
          <DecrementCartItemSvg/>
        </button>
        <b>{count}</b>
        <button className={styles.incrementBtn}>
          <IncrementCartItemSvg/>
        </button>
      </div>
      <b>{item.price * count} $</b>
      <button className={styles.removeBtn}>
        <RemoveCartItemSvg/>
      </button>
    </div>
);
};

export default CartPizza;