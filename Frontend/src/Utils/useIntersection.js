import { useState, useEffect } from "react";

const useIntersection = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const hero = document.getElementById("hero");
    window.addEventListener("scroll", () => {
      if (window.scrollY > hero.offsetTop + hero.offsetHeight - 300) {
        setIsVisible(false);
      } else if (
        (window.scrollY < hero.offsetTop + hero.offsetHeight) &
        (window.scrollY > hero.offsetTop)
      ) {
        setIsVisible(true)
      }
    });
  }, []);

  return isVisible;
};

export default useIntersection;
