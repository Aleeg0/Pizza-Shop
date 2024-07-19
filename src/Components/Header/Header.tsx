import {FC} from 'react';
import Logo from "/logo.svg";
import styles from "../../Styles/Components/_header.module.scss";
import CartSvg from "../SVGS/cartSvg.tsx";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.info}>
          <img src={Logo} alt="appLogo"/>
          <div className={styles.title}>
            <h1>Pizza shop</h1>
            <p>the most delicious pizza in the universe</p>
          </div>
        </div>
        <button
          type="button"
          className={styles.cartButton}
        >
          <p>100 $</p>
          <span/>
          <CartSvg/>
          <p>3</p>
        </button>
        </div>
      <hr className={styles.splitter}/>
    </div>
  );
};

export default Header;