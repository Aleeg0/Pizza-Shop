import {lazy, Suspense} from "react";
import {Route, Routes} from "react-router";
import AppLayout from "./Layouts/AppLayout.tsx";
import Home from "./Pages/Home.tsx";

const LoadableNotFound = lazy(() => import("./Pages/NotFound"));

const LoadableCart = lazy(() => import("./Pages/Cart"));

const LoadablePopUpPizza = lazy(() => import("./Pages/PopUpPizza.tsx"));

const App = () => {

  return (
    <Routes>
      <Route path="" element={<AppLayout/>}>
        <Route path="" element={<Home/>}>
          <Route path="id/:id" element={
            <Suspense>
              <LoadablePopUpPizza/>
            </Suspense>
          }/>
        </Route>
        <Route path="cart" element={
          <Suspense>
            <LoadableCart/>
          </Suspense>
        }/>
        <Route path="*" element={
          <Suspense>
            <LoadableNotFound/>
          </Suspense>
        }/>
      </Route>
    </Routes>
  );
};

export default App;