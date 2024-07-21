import AddToCartSvg from "../SVGS/AddToCartSvg.tsx";
import styles from "../../Styles/Components/_pizza.module.scss"
import {FC, useState} from "react";
import {useDispatch} from "react-redux";
import {addItemToCart} from "../../Redux/Slices/CartSlice.ts";

interface IPizzaProps {
  id: number,
  title: string,
  imgURL: string,
  sizes: number[],
  types: string[],
  price: number[],
  rating: number,
  category: number,
}

const Pizza: FC<IPizzaProps> = ({
  id,
  title,
  imgURL,
  price,
  types,
  sizes,
  rating,
  category
}) => {
  const [curSizeId, setCurSizeId] = useState<number>(0);
  const [curThicknessId, setCurThicknessId] = useState<number>(0);
  const dispatch = useDispatch();

  const onAddToCartClick = () => {
    dispatch(addItemToCart({
      id,
      title,
      imgURL,
      type: types[curThicknessId],
      size: sizes[curSizeId],
      price: price[curSizeId],
      rating,
      category,
    }))
  }


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
        <button
          type="button"
          onClick={onAddToCartClick}
        >
          <AddToCartSvg/>
          <p>Add</p>
        </button>
      </div>
    </div>
  );
};

export default Pizza;