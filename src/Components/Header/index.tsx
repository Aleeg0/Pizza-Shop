import {FC, useEffect, useState} from 'react';
import Logo from "/logo.svg";
import styles from "../../Styles/Components/_header.module.scss";
import CartSvg from "../SVGS/cartSvg.tsx";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCart} from "../../Redux/Slices/CartSlice.ts";

const Header: FC = () => {
  const cart = useSelector(selectCart);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const path = useLocation();

  useEffect(() => {
    if (isMounted) {
      const data = JSON.stringify(cart);
      localStorage.setItem("cartData",  data);
    }
    setIsMounted(true);
  }, [cart.items]);

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.info}>
          <Link to="/">
            <img src={Logo} alt="appLogo"/>
            <div className={styles.title}>
              <h1>Pizza shop</h1>
              <p>the most delicious pizza in the universe</p>
            </div>
          </Link>
        </div>
        {!path.pathname.includes("cart") &&
            <Link to="cart">
                <button
                    type="button"
                    className={styles.cartButton}
                >
                    <p>{cart.totalSum.toFixed(2)} $</p>
                    <span/>
                    <CartSvg/>
                    <p>{cart.totalCount}</p>
                </button>
            </Link>
        }
        </div>
      <hr className={styles.splitter}/>
    </div>
  );
};

export default Header;