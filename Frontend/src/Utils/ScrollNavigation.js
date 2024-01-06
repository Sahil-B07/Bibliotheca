import { useEffect, useState } from "react";

export default function ScrollNavigation() {
  const [audioVol, setaudioVol] = useState(0);

  const handleNavigation = () => {
    let t = 0;
    const maxVol = 0.7;
    const scrollY = window.scrollY;
    try {
      const sectionBPosition = document.querySelector("#audio").offsetTop;

      const transitionRange =
        document.querySelector("#audio").offsetHeight * 0.85;

      if (
        scrollY >= sectionBPosition - transitionRange &&
        scrollY <= sectionBPosition + transitionRange
      ) {
        const distanceFromSectionB = Math.abs(scrollY - sectionBPosition);
        const value =
          maxVol - (distanceFromSectionB / transitionRange) * maxVol;
        t = Math.max(0, Math.min(maxVol, value));
      } else {
        t = 0;
      }
      setaudioVol(t);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return [audioVol];
}
