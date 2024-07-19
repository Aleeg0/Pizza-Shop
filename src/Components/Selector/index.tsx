import React from 'react';
import SelectorArrow from "../../assets/selectorArrow.svg";
import {setSortBy, sortByValues} from "../../Redux/Slices/FiltersSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/Store.ts";

const Selector = () => {
  const [isSelectorOpen, setIsSelectorOpen] = React.useState(false);
  const {sortBy} = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  // this three hooks need to get correct behaviour of mouse click event
  const popUpRef = React.useRef(null);
  const arrowRef = React.useRef(null);
  const spanRef = React.useRef(null);

  React.useEffect(() => {
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
  }, [])

  return (
    <div  className={`selector ${isSelectorOpen ? "active" : ""}`}>
      <p>Sorting by:
        <span
          ref={spanRef}
          className={isSelectorOpen ? "active" : ""}
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
          <div ref={popUpRef} className="pop-up-filters">
              <ul>
                {sortByValues.map((item, i) =>
                  <li
                    key={i}
                    className={item.value === sortBy.value ? "active" : ""}
                    onClick={() => dispatch(setSortBy(item))}
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

export default Selector;