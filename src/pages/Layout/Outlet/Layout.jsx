import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../Footer/Footer";
import FooterWrapper from "../Footer/FooterWrapper";
import HeaderWrapper from "../Header/HeaderWrapper";
import Navbar from "../Header/NavBar";
import MainWrapper from "../Main/MainWrapper";

const Layout = () => {
  return (
    <main className="App">
      <Outlet />
      <ToastContainer />
    </main>
  );
};

export default Layout;
