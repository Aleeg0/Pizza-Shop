import {useSelector} from "react-redux";
import {Pizza, Skeleton} from "../";
import {ILoadingStatus} from "../../Redux/Types/ILoadingStatus.ts";
import {IPizza} from "../../Redux/Types/IPizza.ts";
import {selectPizzas} from "../../Redux/Slices/PizzasSlice.ts";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import styles from "../../Styles/Components/_pizzasContainer.module.scss"

export const PizzasContainer = () => {
  const {pizzas, loading} = useSelector(selectPizzas);
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