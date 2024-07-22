import {categories, setCategory} from "../../Redux/Slices/FiltersSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/Store.ts";
import styles from "../../Styles/Components/_categories.module.scss"
import {setCurrentPage} from "../../Redux/Slices/PagesSlice.ts";

const Categories = () => {
  const {categoryId} = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const onChangeCategory = (id:number) => {
    dispatch(setCurrentPage(1));
    dispatch(setCategory(id));
  }


  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((category, i) =>
          <li
            key={i}
            className={i === categoryId ? styles.active : ""}
            onClick={() => onChangeCategory(i)}
          >
            {category}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Categories;