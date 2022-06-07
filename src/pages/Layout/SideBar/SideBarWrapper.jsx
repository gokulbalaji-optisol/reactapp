import { Outlet } from "react-router-dom";

const SideBarWrapper = ({children}) =>{
    return(
        <div className="sidebar-wrapper">
            <div >
                {children}
            </div>
        </div>
    )
}

export default SideBarWrapper;