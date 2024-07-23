import {ILoadingStatus} from "../../Redux/Types/ILoadingStatus.ts";
import {IPizza} from "../../Redux/Types/IPizza.ts";
import Pizza from "../Pizza";
import Skeleton from "../Pizza/Skeleton.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../Redux/Store.ts";
import styles from "../../Styles/Components/_pizzasContainer.module.scss"
import {useAutoAnimate} from "@formkit/auto-animate/react";

const PizzasContainer = () => {
  const {pizzas, loading} = useSelector((state: RootState) => state.pizzas);
  const SKELETONS_COUNT: number = 4;
  const [animationRef] = useAutoAnimate();

  return (
    <div ref={animationRef} className={styles.container}>
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
  );
};

export default PizzasContainer;