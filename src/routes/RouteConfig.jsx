import {Routes , Route} from 'react-router-dom';
import UserSignUp from 'pages/Auth/Signup/UserSignUp';
import PageNotFound from 'pages/Common/PageNotFound';
import HomePage from 'pages/Homepage/Homepage';
import Layout from 'pages/Layout/Outlet/Layout';
import LayoutWithSideBar from 'pages/Layout/SideBar/LayoutWithSideBar';
import { ALL, BASE, HOME, USER_SIGNUP , SELLER_SIGNUP , GENRE , LOGIN ,BOOK} from './CONSTANTS';
import SellerSignUp from 'pages/Auth/Signup/SellerSignup';
import Genre from 'pages/Genres/Genre';
import Login from 'pages/Auth/Login/Login';
import Book from 'pages/Books/Book';
import MainWrapper from 'pages/Layout/Main/MainWrapper';
import TableLayout from 'components/Table/TableLayout';
import ProtectedRoute from './ProtectedRoutes';
import AdminDashBoard from 'pages/Admin/AdminDashBoard';
import AddGenre from 'pages/Genres/AddGenre';
import AdminAddBanner from 'pages/Admin/Add/AdminAddBanner';
import AdminBanner from 'pages/Admin/AdminBanner';

const RouterConfig = () =>{
    return(
        <Routes>
            <Route path={BASE} element={<Layout />}>
                <Route element={ <MainWrapper 
                    / >} >
                    <Route path={HOME} element={<HomePage />} /> 
                    <Route path={LOGIN} element={< Login/>}/>
                    <Route path={USER_SIGNUP} element={< UserSignUp/>}/>
                </Route>
                 
                <Route element={ <MainWrapper 
                    sidebarPath="public"
                    / >} >
                    <Route path={GENRE} element={< Genre/>}/>
                    <Route path={BOOK} element={<Book/>} />
                </Route>
                <Route element={<MainWrapper 
                    sidebarPath="admin" 
                    />} >
                    <Route path="/admin/dashboard" element={<AdminDashBoard /> } />
                    <Route path='/admin/addGenre' element={<AddGenre />} />
                    <Route path='/admin/addBanner' element={<AdminAddBanner />} />
                    <Route path='/admin/Banner' element={<AdminBanner />} />
                </Route>
                <Route  path="/admin" element={<ProtectedRoute />}>
                    <Route element={<MainWrapper />} >
                    </Route>
                </Route>
                <Route path={ALL} element={<PageNotFound />}/>
            
            </Route>
        </Routes>
    )
}
export default RouterConfig;