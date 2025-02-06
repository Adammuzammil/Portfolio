// components/ScrollHandler.tsx
import { useEffect } from "react";

const ScrollHandler = () => {
  useEffect(() => {
    const handleScroll = (e) => {
      // Add particles on scroll
      // You might want to connect this to your particles store
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return null;
};

export default ScrollHandler;
