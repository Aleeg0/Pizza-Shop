import styles from "../Styles/Components/_cart.module.scss"
import CartSvg from "../Components/SVGS/cartSvg.tsx";
import TrashSvg from "../Components/SVGS/TrashSvg.tsx";
import ThinArrowSvg from "../Components/SVGS/ThinArrowSvg.tsx";
import Header from "../Components/Header";
import {Link} from "react-router-dom";
import CartPizza from "../Components/CartItem";
import {useSelector} from "react-redux";
import {RootState} from "../Redux/Store.ts";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <>
      <Header/>
      <div className={styles.cart}>
        <div className={styles.title}>
          <h1><CartSvg/>Cart</h1>
          <div className={styles.EmptyAllBtn}>
            <TrashSvg/>
            <p>Empty Cart</p>
          </div>
        </div>
        <div className={styles.content}>
          {cartItems.map((item) =>
            <CartPizza
              key={item.id}
              {...item}
            />
          )}
        </div>
        <div className={styles.info}>
          <p>Total pizzas: <b>3</b></p>
          <p>Order amount: <b className={styles.price}>900 $</b></p>
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
    </>
  );
};

export default Cart;