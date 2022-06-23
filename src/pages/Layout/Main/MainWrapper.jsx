import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import FooterWrapper from "../Footer/FooterWrapper";
import HeaderWrapper from "../Header/HeaderWrapper";
import Navbar from "../Header/NavBar";
import AdminSideBar from "../SideBar/AdminSideBar";
import FilterSideBar from "../SideBar/FilterSideBar";
import SellerSideBar from "../SideBar/SellerSideBar";
import SideBarWrapper from "../SideBar/SideBarWrapper";

const MainWrapper = ({ sidebarPath }) => {
  return (
    <>
      <HeaderWrapper>
        <Navbar />
      </HeaderWrapper>
      <div className="main-wrapper">
        {sidebarPath && (
          <SideBarWrapper>
            {sidebarPath === "public" && <FilterSideBar></FilterSideBar>}
            {sidebarPath === "admin" && <AdminSideBar></AdminSideBar>}
            {sidebarPath === "seller" && <SellerSideBar></SellerSideBar>}
          </SideBarWrapper>
        )}

        <div className="content-wrapper">
          <Outlet />
        </div>
      </div>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  );
};
export default MainWrapper;
