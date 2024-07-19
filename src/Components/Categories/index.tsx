import {categories, setCategory} from "../../Redux/Slices/FiltersSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/Store.ts";
import styles from "../../Styles/Components/_categories.module.scss"

const Categories = () => {
  const {categoryId} = useSelector((state: RootState) => state.filter);
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

export default Categories;