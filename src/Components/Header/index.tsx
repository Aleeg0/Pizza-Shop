import {FC} from 'react';
import Logo from "/logo.svg";
import styles from "../../Styles/Components/_header.module.scss";
import CartSvg from "../SVGS/cartSvg.tsx";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../Redux/Store.ts";

const Header: FC = () => {
  const {totalSum, totalCount} = useSelector((state: RootState) => state.cart)

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
        <Link to="cart">
          <button
            type="button"
            className={styles.cartButton}
          >
            <p>{totalSum} $</p>
            <span/>
            <CartSvg/>
            <p>{totalCount}</p>
          </button>
        </Link>
        </div>
      <hr className={styles.splitter}/>
    </div>
  );
};

export default Header;