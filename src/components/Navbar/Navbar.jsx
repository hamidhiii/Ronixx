import React, { useState, useEffect } from "react";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDestkop";
import './Navbar.scss';


export default function Navbar({ onSearch }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  return isMobile ? (
    <NavbarMobile />
  ) : (
    <NavbarDesktop onSearch={onSearch} />
  );
}
