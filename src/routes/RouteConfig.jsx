import React from "react";
import { Routes, Route } from "react-router-dom";
import UserSignUp from "pages/Auth/Signup/UserSignUp";
import PageNotFound from "pages/Common/PageNotFound";
import HomePage from "pages/Homepage/Homepage";
import Layout from "pages/Layout/Outlet/Layout";
import LayoutWithSideBar from "pages/Layout/SideBar/LayoutWithSideBar";
import {
  ALL,
  BASE,
  HOME,
  USER_SIGNUP,
  SELLER_SIGNUP,
  GENRE,
  LOGIN,
  BOOK,
} from "./CONSTANTS";
import SellerSignUp from "pages/Auth/Signup/SellerSignup";
import Genre from "pages/Genres/Genre";
import Login from "pages/Auth/Login/Login";
import Book from "pages/Books/Book";
import MainWrapper from "pages/Layout/Main/MainWrapper";
import TableLayout from "components/Table/TableLayout";
import ProtectedRoute from "./ProtectedRoutes";
import AdminDashBoard from "pages/Admin/AdminDashBoard";
import AddGenre from "pages/Genres/AddGenre";
import AdminAddBanner from "pages/Admin/Add/AdminAddBanner";
import AdminBanner from "pages/Admin/AdminBanner";
import AdminEditBanner from "pages/Admin/Edit/AdminEditBanner";
import AdminGenre from "pages/Admin/AdminGenre";
import AdminBook from "pages/Admin/AdminBook";
import AdminOrder from "pages/Admin/AdminOrder";
import AdminUser from "pages/Admin/AdminUser";
import SellerDashBoard from "pages/Seller/SellerDashBoard";
import SellerGenre from "pages/Seller/SellerGenre";
import SellerBook from "pages/Seller/SellerBook";
import SellerOrder from "pages/Seller/SellerOrder";
import AddBook from "pages/Books/AddBook";
import Cart from "pages/Cart/Cart";
import Logout from "pages/Auth/Login/Logout";
import Orders from "pages/Orders/Orders";
import EnterEmail from "pages/Auth/ForgotPassword/EnterEmail";
import EnterOTP from "pages/Auth/ForgotPassword/EnterOTP";
import AdminCoupon from "pages/Admin/AdminCoupon";
import AdminAddCoupon from "pages/Admin/Add/AdminAddCoupon";
import AdminViewCoupon from "pages/Admin/AdminViewCoupon";
import AdminAddPromo from "pages/Admin/Add/AdminAddPromo";
import AdminEditPromoCode from "pages/Admin/Edit/AdminEditPromo";
import AdminEditPromo from "pages/Admin/Edit/AdminEditPromo";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path={BASE} element={<Layout />}>
        <Route element={<MainWrapper />}>
          <Route path={BASE} element={<HomePage />} />

          <Route path={LOGIN} element={<Login />} />
          <Route path={USER_SIGNUP} element={<UserSignUp />} />
          <Route path={SELLER_SIGNUP} element={<SellerSignUp />} />
          <Route path="forgotpassword" element={<EnterEmail />} />
          <Route path="enterotp" element={<EnterOTP />} />
          <Route path="addGenre" element={<AddGenre />} />
          <Route path="addBook" element={<AddBook />} />
        </Route>

        <Route element={<MainWrapper sidebarPath="public" />}>
          <Route path={GENRE} element={<Genre />} />
          <Route path={BOOK} element={<Book />} />
        </Route>

        <Route element={<ProtectedRoute user={["SELLER", "USER", "ADMIN"]} />}>
          <Route element={<MainWrapper />}>
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/orders"} element={<Orders />} />
          </Route>
        </Route>
        {/* admin */}
        <Route element={<ProtectedRoute user={["ADMIN"]} />}>
          <Route path="/admin" element={<MainWrapper sidebarPath="admin" />}>
            <Route path="dashboard" element={<AdminDashBoard />} />
            <Route path="genres" element={<AdminGenre />} />
            <Route path="books" element={<AdminBook />} />
            <Route path="orders" element={<AdminOrder />} />
            <Route path="users" element={<AdminUser />} />
            <Route path="banners" element={<AdminBanner />} />

            <Route path="addGenre" element={<AddGenre />} />
            <Route path="addBook" element={<AddBook />} />
            <Route path="addBanner" element={<AdminAddBanner />} />

            <Route path="genre/edit/:id" element={<AdminEditBanner />} />
            <Route path="book/edit/:id" element={<AdminEditBanner />} />
            <Route path="banner/edit/:id" element={<AdminEditBanner />} />

            <Route path="coupon" element={<AdminCoupon />} />
            <Route path="coupon/view/:id" element={<AdminViewCoupon />} />
            <Route path="addcoupon" element={<AdminAddCoupon />} />
            <Route path="addPromo/:id" element={<AdminAddPromo />} />
            <Route path="promocode/edit/:id" element={<AdminEditPromo />} />
          </Route>
        </Route>

        {/* seller */}
        <Route element={<ProtectedRoute user={["SELLER"]} />}>
          <Route path="/seller" element={<MainWrapper sidebarPath="seller" />}>
            <Route path="dashboard" element={<SellerDashBoard />} />
            <Route path="genres" element={<SellerGenre />} />
            <Route path="books" element={<SellerBook />} />
            <Route path="orders" element={<SellerOrder />} />

            <Route path="addGenre" element={<AddGenre />} />
            <Route path="addBook" element={<AddGenre />} />

            <Route path="genre/edit/:id" element={<AdminEditBanner />} />
            <Route path="book/edit/:id" element={<AdminEditBanner />} />
            <Route path="banner/edit/:id" element={<AdminEditBanner />} />
          </Route>
        </Route>
        <Route path={"/logout"} element={<Logout />} />
        <Route path={ALL} element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
export default RouterConfig;
