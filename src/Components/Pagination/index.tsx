import styles from "../../Styles/Components/_pagination.module.scss"
import {useDispatch} from "react-redux";
import {setCurrentPage} from "../../Redux/Slices/PagesSlice.ts";
import {FC} from "react";

interface PaginationProps {
  total_pages: number,
  current_page: number,
  onPaginationChange: (status:boolean) => void,
}

export const Pagination: FC<PaginationProps> = ({current_page,total_pages, onPaginationChange}) => {
  const dispatch = useDispatch();

  const onClickFirst = () => {
    if (current_page !== 1){
      dispatch(setCurrentPage(current_page - 1));
      onPaginationChange(true);
    }
  }

  const onClickLast = () => {
    if (current_page !== total_pages) {
      dispatch(setCurrentPage(current_page + 1));
      onPaginationChange(true);
    }
  }

  const onClickPage = (id:number) => {
    dispatch(setCurrentPage(id));
    onPaginationChange(true);
  }

  return (
    <div className={styles.pagesContainer}>
      <ul>
        {total_pages !== 0 && <li
            onClick={onClickFirst}>
          {`<`}
        </li>}
        {[...new Array(total_pages)].map((_, i) =>
          <li
            key={i + 1}
            className={i + 1 === current_page ? styles.active : ""}
            onClick={() => onClickPage(i+1)}
          >{i+1}
          </li>
        )}
        {total_pages !== 0 && <li
          onClick={onClickLast}>
          {`>`}
        </li>}
      </ul>
    </div>
  );
};