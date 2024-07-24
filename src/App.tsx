import Home from "./Pages/Home.tsx";
import {Route, Routes} from "react-router";
import Cart from "./Pages/Cart.tsx";
import NotFound from "./Pages/NotFound.tsx";
import PopUpPizza from "./Pages/PopUpPizza.tsx";
import AppLayout from "./Layouts/AppLayout.tsx";

const App = () => {

  return (
    <Routes>
      <Route path="" element={<AppLayout/>}>
        <Route path="" element={<Home/>}>
          <Route path="id/:id" element={<PopUpPizza/>}/>
        </Route>
        <Route path="cart" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
};

export default App;