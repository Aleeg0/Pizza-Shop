import React from "react";
import Header from "../Components/Header/Header.tsx";
import SelectorArrow from "../assets/selectorArrow.svg";
import Searcher from "../assets/Searcher.svg";
import Pizza from "../Components/Pizza/Pizza.tsx";
import {categories, setCategory, setSortBy, sortByValues} from "../Redux/Slices/FiltersSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Redux/Store.ts";

const Home = () => {
  const [isSelectorOpen, setIsSelectorOpen] = React.useState(false);
  const {categoryId, sortBy} = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="wrapper">
        <Header/>
        <div className="filters">
          <div className="categories">
            <ul>
              {categories.map((category,i) =>
                <li
                  key={i}
                  className={i === categoryId ? "active" :""}
                  onClick={() => dispatch(setCategory(i))}
                >
                  {category}
                </li>
              )}
            </ul>
          </div>
          <div className="inputFilters">
            <div className={`selector ${isSelectorOpen ? "active" : ""}`}>
              <p>Sorting by:
                <span
                  className={isSelectorOpen ? "active" : ""}
                  onClick={() => setIsSelectorOpen(!isSelectorOpen)}>{sortBy.name}
                </span>
              </p>
              <img
                src={SelectorArrow}
                alt="selectArrow"
                onClick={() => setIsSelectorOpen(!isSelectorOpen)}
              />
              {
                isSelectorOpen &&
                  <div className="pop-up-filters">
                      <ul>
                        {sortByValues.map((item,i) =>
                          <li
                            key={i}
                            className={item.value === sortBy.value ? "active" :""}
                            onClick={() => dispatch(setSortBy(item))}
                          >
                            {item.name}
                          </li>
                        )}
                      </ul>
                  </div>
              }
            </div>
            <div className="searcher">
              <img src={Searcher} alt="sercher"/>
              <input
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <div className="content">
          <h1>All pizzas</h1>
          <div className="container">
            <Pizza/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;