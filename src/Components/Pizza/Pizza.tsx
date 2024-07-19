import AddCartSvg from "../SVGS/AddCartSvg.tsx";
import styles from "../../Styles/Components/_pizza.module.scss"

const Pizza = () => {

  return (
    <div className={styles.pizzaContainer}>
      <img src="/PizzasImg/image-1.png" alt="pizza"/>
      <h3>Nameing</h3>
      <div className={styles.filtersContainer}>
        <ul className="thickness">
          <li>Thin</li>
          <li  className={styles.active}>Traditional</li>
        </ul>
        <ul className="size">
          <li >26 sm.</li>
          <li>30 sm.</li>
          <li className={styles.active}>40 sm.</li>
        </ul>
      </div>
      <div className={styles.controls}>
        <b>from 20 $</b>
        <button type="button">
          <AddCartSvg/>
          <p>Add</p>
        </button>
      </div>
    </div>
  );
};

export default Pizza;