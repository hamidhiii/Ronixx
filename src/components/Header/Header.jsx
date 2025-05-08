import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bac1 from "../../assets/img/bac1.png";
import bac2 from "../../assets/img/bac2.png";
import '../Header/Header.scss'
import bac3 from "../../assets/img/bac3.png";


export default function Header() {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,   
    autoplay: true,
    autoplaySpeed: 3500, 
  };

  return (

    
    <div className="header">
   
   
    <Slider {...settings}>
        <div className="bottom">
          <img src={bac1} alt="" className="bac1"/>
       
        </div>
        <div className="bottom">
          <img src={bac2} alt="" />
       
        </div>
        <div className="bottom">
          <img src={bac3} alt="" />
        
        </div>
        

      </Slider>
      
    
      
    </div>   
  );
}


