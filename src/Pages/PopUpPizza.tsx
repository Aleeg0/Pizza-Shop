import CloseSvg from "../Components/SVGS/CloseSvg.tsx";
import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Redux/Store.ts";
import {useEffect, useRef, useState} from "react";
import {addItemToCart} from "../Redux/Slices/CartSlice.ts";
import styles from "../Styles/Pages/_popUpPizza.module.scss"
import stylesPizza from "../Styles/Components/_pizza.module.scss"
import AddToCartSvg from "../Components/SVGS/AddToCartSvg.tsx";
import {ICartItem} from "../Redux/Types/ICartItem.ts";


const PopUpPizza = () => {
  const [curSizeId, setCurSizeId] = useState<number>(0);
  const [curThicknessId, setCurThicknessId] = useState<number>(0);
  const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);

  // for click inspects
  const popUpRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);

  // for getting current pizza
  const navigate = useNavigate();
  const {id} = useParams();
  const idAsNumber = Number(id);

  const {
    title,
    imgURL,
    description,
    types,
    sizes,
    price,
    rating,
    category
  } = useSelector((state: RootState) =>
   state.pizzas.pizzas.find(item => item.id === idAsNumber)!
  );

  const cartPizza: ICartItem | undefined = useSelector((state:RootState) => (
    state.cart.items.find(cartItem =>
      cartItem.item.id === idAsNumber
      && cartItem.item.size === sizes[curSizeId]
      && cartItem.item.type === types[curThicknessId])
  ));

  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const path = event.composedPath();
      if (path.includes(blockRef.current!) && !path.includes(popUpRef.current!)) {
        goBack();
      }
    };

    if (!isPopUpOpen)
      setIsPopUpOpen(true);

    document.body.classList.add("no-scroll");
    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const goBack = () => {
    setIsPopUpOpen(false);
    navigate("/");
    document.body.classList.remove("no-scroll");
  }

  const onAddToCartClick = () => {
    dispatch(addItemToCart({
      id: idAsNumber,
      title,
      imgURL,
      type: types[curThicknessId],
      size: sizes[curSizeId],
      price: price[curSizeId],
      rating,
      category,
    }))
  };

  return (
    <>
      <div ref={blockRef} className={styles.popUpPizza}>
        <div ref={popUpRef} className={`${styles.content}  ${isPopUpOpen && styles.show}`}>
          <button className={styles.goBackBtn} onClick={goBack}>
            <CloseSvg/>
          </button>
          <div className={styles.info}>
            <h2>{title}</h2>
            <p className={styles.chooseFilters}>
              {`${types[curThicknessId]} dough, ${sizes[curSizeId]} sm.`}
            </p>
            <p className={styles.description}>{description}</p>
            <div className={stylesPizza.filtersContainer}>
              <ul className="thickness">
                {types.map((thickness, i) =>
                  <li
                    key={i}
                    className={curThicknessId === i ? stylesPizza.active : ""}
                    onClick={() => setCurThicknessId(i)}
                  >{thickness}</li>
                )}
              </ul>
              <ul className="size">
                {sizes.map((size, i) =>
                  <li
                    key={i}
                    className={curSizeId === i ? stylesPizza.active : ""}
                    onClick={() => setCurSizeId(i)}
                  >{size} sm.</li>
                )}
              </ul>
            </div>
            <button
              type="button"
              onClick={onAddToCartClick}
              className={`${stylesPizza.addToCartBtn} ${cartPizza ? stylesPizza.withValueBtn : ""}`}
            >
              <AddToCartSvg/>
              <p>Add</p>
              <span><p>{cartPizza && cartPizza.count}</p></span>
            </button>
          </div>
          <img src={imgURL} alt={"pizza"}/>
        </div>
      </div>
    </>
  );
};

export default PopUpPizza;