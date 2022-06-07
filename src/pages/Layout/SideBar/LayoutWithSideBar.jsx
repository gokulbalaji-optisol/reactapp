import SideBarWrapper from "./SideBarWrapper";
import FilterSideBar from "./FilterSideBar";
import AdminSideBar from "./AdminSideBar";
import SellerSideBar from "./SellerSideBar";
const LayoutWithSideBar = ({path , children}) =>{
    return(
        <>
        <SideBarWrapper>
            {path==="public" && <FilterSideBar></FilterSideBar>}
            {path==="admin" && <AdminSideBar></AdminSideBar>}
            {path==="seller" && <SellerSideBar></SellerSideBar>}
        </SideBarWrapper>
        {children}
        </>
    )
}
export default LayoutWithSideBar;