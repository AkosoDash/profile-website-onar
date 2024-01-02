import { useState, useEffect } from "react";

const useScroll = () => {
  const x = 0;
  const y = 0;
  const [scrollPosition, setScrollPosition] = useState({ x, y });
  const handleScroll = () => {
    setScrollPosition({
      x: window.scrollX,
      y: window.scrollY,
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollPosition;
};

export default useScroll;
