import Home from "./Pages/Home.tsx";
import {Route, Routes} from "react-router";
import Cart from "./Pages/Cart.tsx";
import NotFound from "./Pages/NotFound.tsx";

const App = () => {

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
};

export default App;