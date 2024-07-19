import Header from "./Components/Header/Header.tsx";
import React from "react";
import SelectorArrow from "./assets/selectorArrow.svg"
import Searcher from "./assets/Searcher.svg"
import Pizza from "./Components/Pizza/Pizza.tsx";

const App = () => {
  const [isSelectorOpen, setIsSelectorOpen] = React.useState(false);

  return (
    <div className="wrapper">
      <Header/>
      <div className="filters">
        <div className="categories">
          <ul>
            <li className="active">All</li>
            <li>Meat</li>
            <li>Vegetarian</li>
            <li>Grill</li>
            <li>Spicy</li>
          </ul>
        </div>
        <div className="inputFilters">
          <div className={`selector ${isSelectorOpen ? "active" : ""}`}>
            <p>Sorting by: <span>title</span></p>
            <img
              src={SelectorArrow}
              alt="selectArrow"
              onClick={() => setIsSelectorOpen(!isSelectorOpen)}
            />
            {
              isSelectorOpen &&
                <div className="pop-up-filters">
                    <ul>
                        <li>popularity</li>
                        <li className="active">by price (ASC)</li>
                        <li>by price (DESC</li>
                        <li>by alphabet</li>
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
  );
};

export default App;