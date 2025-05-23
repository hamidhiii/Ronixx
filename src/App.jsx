import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation, useNavigate } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import SubCategoryElectro from "./Pages/SubCategoryElectro/SubCategoryElectro";
import SubCategoryHand from "./Pages/SubCategoryHand/SubCategoryHand";
import SubCategoryFlashLights from "./Pages/SubCategoryFlashLights/SubCategoryFlashLights";
import SubCategoryMeasuring from "./Pages/SubCategoryMeasuring/SubCategoryMeasuring";
import SubCategoryProtection from "./Pages/SubCategoryProtection/SubCategoryProtection";
import SubCategoryAccessories from "./Pages/SubCategoryAccessories/SubCategoryAccessories";
import SubCAtegoryStorage from "./Pages/SubCAtegoryStorage/SubCAtegoryStorage";
import SubCategorySuplierr from "./Pages/SubCategorySuplier/SubCategorySuplierr";
import SubCategoryJacks from "./Pages/SubCategoryJacks/SubCategoryJacks";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Basket from "./Pages/Basket/Basket";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage/ForgotPasswordPage";
import { ProductDataCard } from "./components/ProductDataCard/ProductDataCard";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import Footer from "./components/Footer/Footer";
import SubProductDrel from "./Pages/SubProductDrel/SubProductDrel";
import ContactUs from "./Pages/ContactUs/ContactUs";
import SearchResults from "./Pages/SearchResults/SearchResults";





export default function App() {
 
 
  const isAuthPage = ["/login", "/register", "/forgot-password"].includes(
    location.pathname
  );
  const navigate = useNavigate();
 
   const handleSearch = (text) => {
    // Переход на страницу поиска с параметром запроса
    navigate(`/search?q=${encodeURIComponent(text)}`);
  };

  return (
    <div>
      {!isAuthPage && <Navbar onSearch={handleSearch}/>}{" "}
      {/* Показываем Navbar, если это не страница аутентификации */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electro-tools" element={<SubCategoryElectro />} />
        <Route path="/hand-tools" element={<SubCategoryHand />} />
        <Route path="/flashlights" element={<SubCategoryFlashLights />} />
        <Route path="/measuring-devices" element={<SubCategoryMeasuring />} />
        <Route path="/protection" element={<SubCategoryProtection />} />
        <Route path="/accessories" element={<SubCategoryAccessories />} />
        <Route path="/toolboxes" element={<SubCAtegoryStorage />} />
        <Route path="/lifting-equipment" element={<SubCategorySuplierr />} />
        <Route path="/jacks" element={<SubCategoryJacks />} />
        <Route path="/product-details" element={<ProductDetail />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/products" element={<SubProductDrel />} />
        <Route path="/contact-Us-&-locations" element={<ContactUs />} />

        <Route path="/search" element={<SearchResults />} />

        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      {!isAuthPage && <Footer />}{" "}

    </div>
  );
}
