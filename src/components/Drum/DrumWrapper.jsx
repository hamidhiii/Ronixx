import React, { useEffect, useState } from "react";
import DrumMobile from "./DrumMobile";
import Drum from "./Drum";


const DrumWrapper = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <DrumMobile /> : <Drum />;
};

export default DrumWrapper;
