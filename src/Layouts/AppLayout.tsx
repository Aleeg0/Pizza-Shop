import {Outlet} from "react-router";
import {Header} from "../Components";

const AppLayout = () => {
  return (
    <div className="wrapper">
      <Header/>
      <Outlet/>
    </div>
  );
};

export default AppLayout;