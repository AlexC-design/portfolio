import React, { useEffect, useState } from "react";
import triangle from "../../assets/svg/triangle.svg";
import "./css/scrolling-triangles.css";

const ScrollingTriangles = () => {
  const [scrollAmount, setScrollAmount] = useState(0);
  const [triangleSets, setTriangleSets] = useState([0, 1, 2]);

  const triangles = {
    largest: { offsetPosition: 100, offsetRotation: 0 },
    big: { offsetPosition: 60, offsetRotation: 20 },
    medium: { offsetPosition: 40, offsetRotation: -50 },
    small: { offsetPosition: 20, offsetRotation: 10 }
  };

  const topPosition = (scroll, triangle) => {
    return Math.round(triangles[triangle].offsetPosition - scroll / 20);
  };

  const rotation = (scroll, triangle) => {
    const rotationOffset = {
      largest: 50,
      big: 35,
      medium: 10,
      small: 5
    };

    return Math.round(
      triangles[triangle].offsetRotation + scroll / rotationOffset[triangle]
    );
  };

  const triangleStyle = (triangle, set) => {
    return {
      top: `${set * 150 + topPosition(scrollAmount, triangle)}%`,
      transform: `rotate(${rotation(scrollAmount, triangle)}deg)`
    };
  };

  const handleScroll = e => {
    setScrollAmount(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", e => handleScroll(e));

    return () => {
      window.removeEventListener("scroll", e => handleScroll(e));
    };
  }, []);

  return (
    <div className="triangles-container">
      {triangleSets.map(set => {
        return Object.keys(triangles).map(triangleName => {
          return (
            <img
              className={`triangle ${triangleName}`}
              src={triangle}
              alt=""
              style={triangleStyle(triangleName, set)}
            />
          );
        });
      })}
    </div>
  );
};

export default ScrollingTriangles;

/////////// previous scroll

// import React, { useEffect, useState } from "react";
// import triangle from "../../assets/svg/triangle.svg";
// import "./css/scrolling-triangles.css";

// const ScrollingTriangles = () => {
//   const [scrollAmount, setScrollAmount] = useState(0);

//   const offset = {
//     lergest: 0,
//     big: 0,
//     medium: 0,
//     small: 0
//   };

//   const mapIntervals = (A, B, x) => {
//     let y = ((x - A[0]) * (B[1] - B[0])) / (A[1] - A[0]) + B[0];
//     console.log(x, y, A, B);

//     y = Math.round(y);
//     return y;
//   };

//   const topPosition = scroll => {
//     return mapIntervals([0, window.innerHeight], [100, -100], scroll);
//   };

//   const largestStyle = {
//     top: `${topPosition(scrollAmount)}%`,
//     left: "50%"
//   };

//   const handleScroll = e => {
//     setScrollAmount(
//       window.scrollY -
//         window.innerHeight * Math.floor(window.scrollY / window.innerHeight)
//     );
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", e => handleScroll(e));

//     return () => {
//       window.removeEventListener("scroll", e => handleScroll(e));
//     };
//   }, []);

//   return (
//     <div className="triangles-container">
//       <div className="test">{`${scrollAmount} ${topPosition(
//         scrollAmount
//       )}`}</div>
//       <img
//         className="triangle largest"
//         src={triangle}
//         alt=""
//         style={largestStyle}
//       />
//     </div>
//   );
// };

// export default ScrollingTriangles;
