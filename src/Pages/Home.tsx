import Header from "../Components/Header";
import Categories from "../Components/Categories";
import Searcher from "../Components/Searcher";
import Selector from "../Components/Selector";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Redux/Store.ts";
import {fetchPizzas} from "../Redux/fetchPizzas.ts"
import {useEffect, useState} from "react";
import Pagination from "../Components/Pagination";
import {setCategory, setSortBy, sortByValues} from "../Redux/Slices/FiltersSlice.ts";
import qs from "qs";
import {setCurrentPage} from "../Redux/Slices/PagesSlice.ts";
import {useNavigate} from "react-router";
import PizzasContainer from "../Components/PizzasContainer/PizzasContainer.tsx";


const Home = () => {

  const {categoryId,sortBy,searchValue} = useSelector((state: RootState) => state.filter);
  const {paginationData} = useSelector((state: RootState) => state.pages);
  const dispatch = useDispatch<AppDispatch>();
  const [isPagination, setIsPagination] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(true);
  const navigate = useNavigate();

  // for filters
  useEffect(() => {
    if (!isMounted) {
      dispatch(fetchPizzas({
        categoryId,
        sortBy,
        searchValue,
        paginationData: {...paginationData, current_page: 1},
      }));
      window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }
  },[categoryId, searchValue, sortBy, isMounted]);

  // for pagination
  useEffect(() => {
    if (!isMounted && isPagination){
      dispatch(fetchPizzas({
        categoryId,
        sortBy,
        searchValue,
        paginationData
      }));
      window.scrollTo({top: 0, left: 0, behavior: "smooth"});
      setIsPagination(false);
    }
  }, [isPagination]);

  // for parse querySearch
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
    setIsMounted(false);
  }, []);


  useEffect(() => {
    if (!isMounted) {
      let query: string;
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
    }
  }, [categoryId, searchValue, sortBy, paginationData.current_page]);

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
        <PizzasContainer/>
        <Pagination
          {...paginationData}
          onPaginationChange={setIsPagination}
        />
      </div>
    </>
  );
};

export default Home;