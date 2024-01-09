import { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
        if (typeof window !== "undefined") {
          const blob = document.getElementById("blob");
          window.onpointermove = (event) => {
            const { clientX, clientY } = event;
            blob?.animate(
              {
                left: `${clientX}px`,
                top: `${clientY}px`,
              },
              { duration: 20000, fill: "forwards" }
              );
            };
          }
      },);
}

export default Cursor