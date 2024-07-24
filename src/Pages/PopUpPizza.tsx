import CloseSvg from "../Components/SVGS/CloseSvg.tsx";
import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Redux/Store.ts";
import {useEffect, useRef, useState} from "react";
import {addItemToCart} from "../Redux/Slices/CartSlice.ts";
import styles from "../Styles/Pages/_popUpPizza.module.scss"
import stylesPizza from "../Styles/Components/_pizza.module.scss"


const PopUpPizza = () => {
  const [curSizeId, setCurSizeId] = useState<number>(0);
  const [curThicknessId, setCurThicknessId] = useState<number>(0);
  const {id} = useParams();
  const popUpRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const idAsNumber = Number(id);

  const pizza = useSelector((state: RootState) =>
   state.pizzas.pizzas.find(item => item.id === idAsNumber)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const isPopUpOpen = localStorage.getItem("isPopUpOpen");
    console.log("location",isPopUpOpen);
    if (isPopUpOpen === 'true') {
      console.log("location In PopUp");
      goBack();
    }
    else {
      localStorage.setItem('isPopUpOpen', 'true');
    }
  }, [navigate]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log("clickOutside");
      const path = event.composedPath();
      if (path.includes(blockRef.current!) && !path.includes(popUpRef.current!)) {
        goBack();
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, [ navigate]);

  if (!pizza){
    return (
      <>
      </>
    );
  }

  const {
    title,
    imgURL,
    description,
    types,
    sizes,
    price,
    rating,
    category
  } = pizza;

  const goBack = () => {
    localStorage.setItem('isPopUpOpen','false');
    navigate("/");
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
        <div ref={popUpRef} className={styles.content}>
          <button className={styles.goBackBtn} onClick={goBack}>
            <CloseSvg/>
          </button>
          <div className={styles.info}>
            <h2>{title}</h2>
            <p className={styles.chooseFilters}>
              {`${types[curThicknessId]} dough, ${sizes[curSizeId]} sm.`}
            </p>
            <p className="discription">{description}</p>
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
              onClick={onAddToCartClick}
            >
              Add
            </button>
          </div>
          <img src={imgURL} alt={"pizza"}/>
        </div>
      </div>
    </>
  );
};

export default PopUpPizza;