import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation, useNavigate, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Basket from "./Pages/Basket/Basket";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage/ForgotPasswordPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import SubProductDrel from "./Pages/SubProductDrel/SubProductDrel";
import ContactUs from "./Pages/ContactUs/ContactUs";
import SearchResults from "./Pages/SearchResults/SearchResults";
import { useGetCategoriesQuery } from "./services/api/categoriesApi";
import SubCategoryPage from "./Pages/SubCategoryPage/SubCategoryPage";
import ManageAddressesPage from "./Pages/ManageAddressesPage/ManageAddressesPage";
import SavedCardsPage from "./Pages/SavedCardsPage/SavedCardsPage";
import MyOrdersPage from "./Pages/MyOrdersPage/MyOrdersPage";
import ProductsBySubcategory from "./Pages/ProductsBySubcategory/ProductsBySubcategory";

export default function App() {
  const location = useLocation();

  const isAuthPage = ["/login", "/register", "/forgot-password"].includes(
    location.pathname
  );

  const { data: categories = [], isLoading, isError } = useGetCategoriesQuery();

  const navigate = useNavigate();
  const handleSearch = (text) => {
    navigate(`/search?q=${encodeURIComponent(text)}`);
  };

  return (
    <div>
      {!isAuthPage && <Navbar onSearch={handleSearch} />}
   <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/product/:path" element={<ProductsBySubcategory />} />
  
  {isLoading ? null : isError ? (
    <Route path="*" element={<div>Ошибка загрузки категорий</div>} />
  ) : (
    <Route path="/categories/:slug/" element={<SubCategoryPage categories={categories} />} />
  )}

  <Route path="/product/details/:productName" element={<ProductDetail />} />
  <Route path="/basket" element={<Basket />} />
  <Route path="/products" element={<SubProductDrel />} />
  <Route path="/contact-Us-&-locations" element={<ContactUs />} />
  <Route path="/search" element={<SearchResults />} />
  <Route path="/forgot-password" element={<ForgotPasswordPage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/profile" element={<ProfilePage />} />
  <Route path="/register" element={<RegisterPage />} />
  <Route path="/profile/orders" element={<MyOrdersPage />} />
  <Route path="/profile/addresses" element={<ManageAddressesPage />} />
  <Route path="/profile/cards" element={<SavedCardsPage />} />
</Routes>

      {!isAuthPage && <Footer />}
    </div>
  );
}
