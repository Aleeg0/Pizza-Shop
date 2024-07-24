import Header from "../Components/Header";
import {Outlet} from "react-router";

const AppLayout = () => {
  return (
    <div className="wrapper">
      <Header/>
      <Outlet/>
    </div>
  );
};

export default AppLayout;