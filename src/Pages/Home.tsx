import Header from "../Components/Header";
import Pizza from "../Components/Pizza";
import Categories from "../Components/Categories";
import Searcher from "../Components/Searcher";
import Selector from "../Components/Selector";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Redux/Store.ts";
import {IPizza} from "../Redux/Types/IPizza.ts";
import {fetchPizzas} from "../Redux/fetchPizzas.ts"
import {useEffect} from "react";
import Pagination from "../Components/Pagination";
import {ILoadingStatus} from "../Redux/Types/ILoadingStatus.ts";
import Skeleton from "../Components/Pizza/Skeleton.tsx";

const Home = () => {
  const {pizzas, loading} = useSelector((state: RootState) => state.pizzas);
  const {categoryId,sortBy,searchValue} = useSelector((state: RootState) => state.filter);
  const {paginationData} = useSelector((state: RootState) => state.pages);
  const dispatch = useDispatch<AppDispatch>();
  const SKELETONS_COUNT = 8;

  useEffect(() => {
    dispatch(fetchPizzas({
      categoryId,
      sortBy,
      searchValue,
      paginationData
    }));
  },[categoryId,sortBy,searchValue,paginationData.current_page])

  return (
    <>
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
          {loading === ILoadingStatus.SUCCEEDED ?
            pizzas.map((pizza: IPizza) =>
            <Pizza
              key={pizza.id}
              {...pizza}
            />)
            :
            [...Array(SKELETONS_COUNT)].map((_, i) =>
              <Skeleton key={i}/>)
          }

        </div>
        <Pagination
          {...paginationData}
        />
      </div>
    </>
  );
};

export default Home;