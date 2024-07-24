import {categories, selectFilters, setCategory} from "../../Redux/Slices/FiltersSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import styles from "../../Styles/Components/_categories.module.scss"

export const Categories = () => {
  const {categoryId} = useSelector(selectFilters);
  const dispatch = useDispatch();

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((category, i) =>
          <li
            key={i}
            className={i === categoryId ? styles.active : ""}
            onClick={() => dispatch(setCategory(i))}
          >
            {category}
          </li>
        )}
      </ul>
    </div>
  );
};