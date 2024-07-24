import searchImg from "../../assets/Searcher.svg";
import styles from "../../Styles/Components/_searcher.module.scss"
import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../Redux/Slices/FiltersSlice.ts";
import debounce from "lodash.debounce";


export const Searcher = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const updateSearchValue = useCallback(debounce((value) => {
      dispatch(setSearchValue(value));
      },500),
    []);


  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    updateSearchValue(event.target.value);
  }

  return (
    <div className={styles.searcher}>
      <img src={searchImg} alt="sercher"/>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(event) => onChangeInput(event)}
      />
    </div>
  );
};