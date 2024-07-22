import Header from "../Components/Header";
import Pizza from "../Components/Pizza";
import Categories from "../Components/Categories";
import Searcher from "../Components/Searcher";
import Selector from "../Components/Selector";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Redux/Store.ts";
import {IPizza} from "../Redux/Types/IPizza.ts";
import {fetchPizzas} from "../Redux/fetchPizzas.ts"
import {useEffect, useRef, useState} from "react";
import Pagination from "../Components/Pagination";
import {ILoadingStatus} from "../Redux/Types/ILoadingStatus.ts";
import Skeleton from "../Components/Pizza/Skeleton.tsx";
import {setCategory, setSortBy, sortByValues} from "../Redux/Slices/FiltersSlice.ts";
import qs from "qs";
import {setCurrentPage} from "../Redux/Slices/PagesSlice.ts";
import {useNavigate} from "react-router";


const Home = () => {
  const {pizzas, loading} = useSelector((state: RootState) => state.pizzas);
  const {categoryId,sortBy,searchValue} = useSelector((state: RootState) => state.filter);
  const {paginationData} = useSelector((state: RootState) => state.pages);
  const dispatch = useDispatch<AppDispatch>();
  const [isPagination, setIsPagination] = useState<boolean>(false);
  const isMounted = useRef<boolean>(true);
  const navigate = useNavigate();
  const SKELETONS_COUNT = 8;

    useEffect(() => {
    if (!isMounted.current) {
      dispatch(fetchPizzas({
        categoryId,
        sortBy,
        searchValue,
        paginationData
      }));
      window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }
  },[categoryId, searchValue, sortBy]);

  useEffect(() => {
    if (!isMounted.current && isPagination){
      dispatch(fetchPizzas({
        categoryId,
        sortBy,
        searchValue,
        paginationData
      }));
      window.scrollTo({top: 0, left: 0, behavior: "smooth"});
      setIsPagination(false);
      console.log(isPagination);
    }
  }, [isPagination]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setCategory(params.category ? Number(params.category) : 0));
      if (params.sortBy){
        const querySortBy = sortByValues.find(item => item.value === params.sortBy);
        dispatch(setSortBy(querySortBy ? querySortBy : sortByValues[0]));
      }
      dispatch(setCurrentPage(params.page ? Number(params.page) : 1));
    }
    isMounted.current = false;
  }, []);

  useEffect(() => {

    let query: string | null = null;
    if (categoryId !== 0) {
      query = qs.stringify({
        page: paginationData.current_page,
        limit: paginationData.per_page,
        sortBy: sortBy.value,
        category: categoryId
      });
    }
    else {
      query = qs.stringify({
        page: paginationData.current_page,
        limit: paginationData.per_page,
        sortBy: sortBy.value
      });
    }
    navigate(`?${query}`);
  }, [categoryId, searchValue, sortBy, paginationData]);

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
          onPaginationChange={setIsPagination}
        />
      </div>
    </>
  );
};

export default Home;