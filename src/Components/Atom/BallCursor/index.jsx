// import React, { useEffect, useRef } from "react";
// import Styles from "./style.module.scss";

// const CursorDot = () => {
//   const cursorDotRef = useRef(null);
//   const cursorOutlineRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const posX = e.clientX;
//       const posY = e.clientY;

//       // Update the dot position directly
//       if (cursorDotRef.current) {
//         cursorDotRef.current.style.left = `${posX}px`;
//         cursorDotRef.current.style.top = `${posY}px`;
//       }

//       // Animate the outline position
//       if (cursorOutlineRef.current) {
//         cursorOutlineRef.current.animate(
//           {
//             left: `${posX}px`,
//             top: `${posY}px`,
//           },
//           {
//             duration: 500,
//             fill: "forwards",
//             // easing: "ease-out",
//           }
//         );
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <>
//       <div className={Styles.cursorDot} ref={cursorDotRef}></div>
//       <div className={Styles.cursorOutline} ref={cursorOutlineRef}></div>
//     </>
//   );
// };

// export default CursorDot;
import React, { useEffect, useRef } from "react";
import Styles from "./style.module.scss";

const CursorDot = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const posX = e.pageX;
      const posY = e.pageY;

      // Update the dot position directly
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${posX}px`;
        cursorDotRef.current.style.top = `${posY}px`;
      }

      // Animate the outline position
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          {
            duration: 500,
            fill: "forwards",
            easing: "ease-out",
          }
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className={Styles.cursorDot} ref={cursorDotRef}></div>
      <div className={Styles.cursorOutline} ref={cursorOutlineRef}></div>
    </>
  );
};

export default CursorDot;
