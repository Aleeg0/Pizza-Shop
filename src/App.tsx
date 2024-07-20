import Home from "./Pages/Home.tsx";
import {Route, Routes} from "react-router";
import Cart from "./Pages/Cart.tsx";

const App = () => {

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="cart" element={<Cart/>} />
      </Routes>
    </div>
  );
};

export default App;