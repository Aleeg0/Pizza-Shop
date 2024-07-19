import AddCartSvg from "../SVGS/AddCartSvg.tsx";
import styles from "../../Styles/Components/_pizza.module.scss"
import {FC} from "react";

interface IPizzaProps {
  id: number,
  title: string,
  imgURL: string,
  sizes: number[],
  price: number,
}

const Pizza: FC<IPizzaProps> = ({
  id,
  title,
  imgURL,
  price,
  sizes
}) => {

  return (
    <div className={styles.pizzaContainer}>
      <img src={imgURL} alt="pizza"/>
      <h3>{title}</h3>
      <div className={styles.filtersContainer}>
        <ul className="thickness">
          <li>Thin</li>
          <li  className={styles.active}>Traditional</li>
        </ul>
        <ul className="size">
          {sizes.map(size =>
            <li>{size} sm.</li>
          )}
        </ul>
      </div>
      <div className={styles.controls}>
        <b>from {price} $</b>
        <button type="button">
          <AddCartSvg/>
          <p>Add</p>
        </button>
      </div>
    </div>
  );
};

export default Pizza;