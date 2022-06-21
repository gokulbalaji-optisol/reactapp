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

const RouterConfig = () => {
  return (
    <Routes>
      <Route path={BASE} element={<Layout />}>
        <Route element={<MainWrapper />}>
          <Route path={BASE} element={<HomePage />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={USER_SIGNUP} element={<UserSignUp />} />
          <Route path="/users" element={<AdminUser />} />
        </Route>

        <Route element={<MainWrapper sidebarPath="public" />}>
          <Route path={GENRE} element={<Genre />} />
          <Route path={BOOK} element={<Book />} />
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
            <Route path="addBook" element={<AddGenre />} />
            <Route path="addBanner" element={<AdminAddBanner />} />

            <Route path="genre/edit/:id" element={<AdminEditBanner />} />
            <Route path="book/edit/:id" element={<AdminEditBanner />} />
            <Route path="banner/edit/:id" element={<AdminEditBanner />} />
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

        <Route path={ALL} element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
export default RouterConfig;
