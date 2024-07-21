import AddToCartSvg from "../SVGS/AddToCartSvg.tsx";
import styles from "../../Styles/Components/_pizza.module.scss"
import {FC, useState} from "react";

interface IPizzaProps {
  id: number,
  title: string,
  imgURL: string,
  sizes: number[],
  types: string[],
  price: number[],
}

const Pizza: FC<IPizzaProps> = ({
  id,
  title,
  imgURL,
  price,
  types,
  sizes
}) => {
  const [curSizeId, setCurSizeId] = useState<number>(0);
  const [curThicknessId, setCurThicknessId] = useState<number>(0);


  return (
    <div className={styles.pizzaContainer}>
      <img src={imgURL} alt="pizza"/>
      <h3>{title}</h3>
      <div className={styles.filtersContainer}>
        <ul className="thickness">
          {types.map((thickness, i) =>
            <li
              key={i}
              className={curThicknessId === i ? styles.active : ""}
              onClick={() => setCurThicknessId(i)}
            >{thickness}</li>
          )}
        </ul>
        <ul className="size">
          {sizes.map((size,i) =>
            <li
              key={i}
              className={curSizeId === i ? styles.active : ""}
              onClick={() => setCurSizeId(i)}
            >{size} sm.
            </li>
          )}
        </ul>
      </div>
      <div className={styles.controls}>
        <b>from {price[curSizeId]} $</b>
        <button type="button">
          <AddToCartSvg/>
          <p>Add</p>
        </button>
      </div>
    </div>
  );
};

export default Pizza;