import Header from "../Components/Header";
import Pizza from "../Components/Pizza";
import Categories from "../Components/Categories";
import Searcher from "../Components/Searcher";
import Selector from "../Components/Selector";

const Home = () => {

  return (
    <div>
      <div className="wrapper">
        <Header/>
        <div className="filters">
          <Categories/>
          <div className="inputFilters">
            <Selector/>
            <Selector/>
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