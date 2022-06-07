import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import FooterWrapper from "../Footer/FooterWrapper";
import HeaderWrapper from "../Header/HeaderWrapper";
import Navbar from "../Header/NavBar";
import FilterSideBar from "../SideBar/FilterSideBar";
import SideBarWrapper from "../SideBar/SideBarWrapper";

const MainWrapper = ({path}) => {
    return(
        <>
        <HeaderWrapper>
                <Navbar />
            </HeaderWrapper>
        <div className="main-wrapper">
            {path && <SideBarWrapper>
                {path==="public" && <FilterSideBar></FilterSideBar>}
                {/* {path==="admin" && <AdminSideBar></AdminSideBar>} */}
                {/* {path==="seller" && <SellerSideBar></SellerSideBar>} */}
            </SideBarWrapper>}
                
                <div className="content-wrapper">
                    <Outlet/>
                </div>
             
        </div>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
            </>
    )
}
export default MainWrapper;