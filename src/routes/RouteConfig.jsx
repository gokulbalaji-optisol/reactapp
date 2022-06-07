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
                    path="public"
                    / >} >
                    <Route path={GENRE} element={< Genre/>}/>
                    <Route path={BOOK} element={<Book/>} />
                </Route>
                
                <Route path={ALL} element={<PageNotFound />}/>
            
            </Route>
        </Routes>
    )
}
export default RouterConfig;