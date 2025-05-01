import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import SubCategoryElectro from './Pages/SubCategoryElectro/SubCategoryElectro';
import SubCategoryHand from './Pages/SubCategoryHand/SubCategoryHand';
import SubCategoryFlashLights from './Pages/SubCategoryFlashLights/SubCategoryFlashLights';
import SubCategoryMeasuring from './Pages/SubCategoryMeasuring/SubCategoryMeasuring';
import SubCategoryProtection from './Pages/SubCategoryProtection/SubCategoryProtection';
import SubCategoryAccessories from './Pages/SubCategoryAccessories/SubCategoryAccessories';
import SubCAtegoryStorage from './Pages/SubCAtegoryStorage/SubCAtegoryStorage';
import SubCategorySuplierr from './Pages/SubCategorySuplier/SubCategorySuplierr';
import SubCategoryJacks from './Pages/SubCategoryJacks/SubCategoryJacks';
import ProductDetail from './components/ProductDetail/ProductDetail';

export default function App() {
  return (
    <div>
       <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/electro-tools' element={<SubCategoryElectro/>}/>
        <Route path='/hand-tools' element={<SubCategoryHand/>}/>
        <Route path='/flashlights' element={<SubCategoryFlashLights/>}/>
        <Route path='/measuring-devices' element={<SubCategoryMeasuring/>}/>
        <Route path='/protection' element={<SubCategoryProtection/>}/>
        <Route path='/accessories' element={<SubCategoryAccessories/>}/>
        <Route path='/toolboxes' element={<SubCAtegoryStorage/>}/>
        <Route path='/lifting-equipment' element={<SubCategorySuplierr/>}/>
        <Route path='/jacks' element={<SubCategoryJacks/>}/>
        <Route path='/product-details' element={<ProductDetail/>}/>



      </Routes>

    </div>
  )
}
