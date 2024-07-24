import {Link} from "react-router-dom";
import {CartPizza} from "../Components";
import {useDispatch, useSelector} from "react-redux";
import {clearCart, selectCart} from "../Redux/Slices/CartSlice.ts";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {CartSvg,TrashSvg,ThinArrowSvg} from "../Components/SVGC";
import emptyCart from "../assets/emptyCart.svg"
import styles from "../Styles/Pages/_cart.module.scss"

const Cart = () => {
  const {items, totalSum,totalCount} = useSelector(selectCart);
  const dispatch = useDispatch();
  const [animationRef] = useAutoAnimate();

  const onRemoveAllClick = () => {
    dispatch(clearCart());
  }

  // if cart is empty
  if (items.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h1>Cart is empty 😕</h1>
        <p>
          Most likely, you haven't ordered a pizza yet.
          To order a pizza, go to the main page.
        </p>
        <img src={emptyCart} alt="emptyCart" />
        <Link to="/">
          <button
            className={styles.goBackBtn}
          >
            <ThinArrowSvg/>
            Go back
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <div className={styles.title}>
        <h1><CartSvg/>Cart</h1>
        <div
          className={styles.EmptyAllBtn}
          onClick={onRemoveAllClick}>
          <TrashSvg/>
          <p>Empty Cart</p>
        </div>
      </div>
      <ul ref={animationRef} className={styles.content}>
        {items.map((item) =>
          <li key={item.id}><CartPizza
            key={item.id}
            {...item}
          /></li>
        )}
      </ul>
      <div className={styles.info}>
        <p>Total pizzas: <b>{totalCount}</b></p>
        <p>Order amount: <b className={styles.price}>{totalSum} $</b></p>
      </div>
      <div className={styles.controls}>
        <Link to="/">
          <button className={styles.goBackBtn}>
            <ThinArrowSvg/>
            Go back
          </button>
        </Link>
        <button className={styles.makeOrderBtn}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Cart;