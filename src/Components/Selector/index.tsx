import {useState,useRef,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectFilters, setSortBy, sortByValues} from "../../Redux/Slices/FiltersSlice.ts";
import SelectorArrow from "../../assets/selectorArrow.svg";
import styles from "../../Styles/Components/_selector.module.scss"

export const Selector = () => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const {sortBy} = useSelector(selectFilters);
  const dispatch = useDispatch();

  // this three hooks need to get correct behaviour of mouse click event
  const popUpRef = useRef(null);
  const arrowRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const path = event.composedPath();
      if (!(path.includes(popUpRef.current!)
            || path.includes(arrowRef.current!)
            || path.includes(spanRef.current!))
      ) {
        setIsSelectorOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const onSelectorChange = (item: {name: string,value:string}) => {
    dispatch(setSortBy(item));
    setIsSelectorOpen(false);
  }

  return (
    <div  className={`${styles.selector} ${isSelectorOpen ? styles.active : ""}`}>
      <p>Sorting by:
        <span
          ref={spanRef}
          className={isSelectorOpen ? styles.active : ""}
          onClick={() => setIsSelectorOpen(!isSelectorOpen)}>{sortBy.name}
        </span>
      </p>
      <img
        ref={arrowRef}
        src={SelectorArrow}
        alt="selectArrow"
        onClick={() => setIsSelectorOpen(!isSelectorOpen)}
      />
      {
        isSelectorOpen &&
          <div ref={popUpRef} className={styles.popUpFilters}>
              <ul>
                {sortByValues.map((item, i) =>
                  <li
                    key={i}
                    className={item.value === sortBy.value ? styles.active : ""}
                    onClick={() => onSelectorChange(item)}
                  >
                    {item.name}
                  </li>
                )}
              </ul>
          </div>
      }
    </div>
  );
};