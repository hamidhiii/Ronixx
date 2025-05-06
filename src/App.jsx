import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./Pages/Home/Home";
import SubCategoryElectro from "./Pages/SubCategoryElectro/SubCategoryElectro";
import SubCategoryHand from "./Pages/SubCategoryHand/SubCategoryHand";
import SubCategoryFlashLights from "./Pages/SubCategoryFlashLights/SubCategoryFlashLights";
import SubCategoryMeasuring from "./Pages/SubCategoryMeasuring/SubCategoryMeasuring";
import SubCategoryProtection from "./Pages/SubCategoryProtection/SubCategoryProtection";
import SubCategoryAccessories from "./Pages/SubCategoryAccessories/SubCategoryAccessories";
import SubCategoryStorage from "./Pages/SubCategoryStorage/SubCategoryStorage";  
import SubCategoryJacks from "./Pages/SubCategoryJacks/SubCategoryJacks";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ContactUs from "./Pages/ContactUs/ContactUs";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

import ForgotPasswordPage from "./Pages/ForgotPasswordPage/ForgotPasswordPage"; // Импортируем страницу восстановления пароля

import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import { ProductDataCard } from "./components/ProductDataCard/ProductDataCard";
import SubProductDrel from "./Pages/SubProductDrel/SubProductDrel";
import { SubCategorySupplier } from "./Constants/Index";
import SubCategorySuplierr from "./Pages/SubCategorySuplier/SubCategorySuplierr";


export default function App() {
  const isAuthPage = window.location.pathname === "/login" || window.location.pathname === "/register" || window.location.pathname === "/forgot-password"; 

  return (
    <div>
      {!isAuthPage && <Navbar />}  {/* Показываем Navbar, если это не страница аутентификации */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electro-tools" element={<SubCategoryElectro />} />
        <Route path="/hand-tools" element={<SubCategoryHand />} />
        <Route path="/flashlights" element={<SubCategoryFlashLights />} />
        <Route path="/measuring-devices" element={<SubCategoryMeasuring />} />
        <Route path="/protection" element={<SubCategoryProtection />} />
        <Route path="/accessories" element={<SubCategoryAccessories />} />
        <Route path="/toolboxes" element={<SubCategoryStorage />} />
        <Route path="/lifting-equipment" element={<SubCategorySuplierr />} />
        <Route path="/jacks" element={<SubCategoryJacks />} />
        <Route path="/product-details" element={<ProductDetail />} />
        <Route path="/contact-us-and-locations" element={<ContactUs />} />
        {/* <Route path="/battery-tools" element={<SubProductDrel/>} /> */}
        <Route path="/contact-Us-&-locations" element={<ContactUs />} />
        {/* Маршруты аутентификации */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/products" element={< SubProductDrel/>} />

        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>

      {!isAuthPage && <Footer />}  {/* Показываем Footer, если это не страница аутентификации */}
    </div>
  );
}
