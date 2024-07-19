import Header from "../Components/Header";
import Pizza from "../Components/Pizza";
import Categories from "../Components/Categories";
import Searcher from "../Components/Searcher";
import Selector from "../Components/Selector";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Redux/Store.ts";
import {fetchPizzas, IPizza} from "../Redux/Slices/PizzasSlice.ts";
import {useEffect} from "react";

const Home = () => {
  const {pizzas} = useSelector((state: RootState) => state.pizzas);
  const {categoryId,sortBy,searchValue} = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPizzas({
      categoryId,
      sortBy,
      searchValue
    }));
  },[categoryId,sortBy,searchValue])

  return (
    <div className="wrapper">
      <Header/>
      <div className="filters">
        <Categories/>
        <div className="inputFilters">
          <Selector/>
          <Searcher/>
        </div>
      </div>
      <div className="content">
        <h1>All pizzas</h1>
        <div className="container">
          {pizzas.map((pizza: IPizza) =>
            <Pizza
              key={pizza.id}
              {...pizza}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;