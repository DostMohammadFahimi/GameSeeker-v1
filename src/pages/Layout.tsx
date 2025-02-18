import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default layout;
