import React, { createContext, useState, useEffect } from "react";

export const ResizeContext = createContext();

export const ResizeProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <ResizeContext.Provider value={{ isMobile }}>{children}</ResizeContext.Provider>;
};
