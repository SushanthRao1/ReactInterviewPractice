// export function throttle(func, limit) {
//   let lastCall = 0;

//   return function (...args) {
//     const now = Date.now();
//     if (now - lastCall >= limit) {
//       lastCall = now;
//       func.apply(this, args);
//     }
//   };
// }



// ///////////
// import React, { useEffect, useState, useCallback } from "react";
// import { throttle } from "./throttle.js"; // import utility

// const Debounce = () => {
//   const [items, setItems] = useState(Array.from({ length: 20 }));

//   const loadMore = () => {
//     console.log("Loading more items...");
//     setItems((prev) => [...prev, ...Array.from({ length: 10 })]);
//   };

//   const handleScroll = useCallback(
//     throttle(() => {
//       const bottom =
//         window.innerHeight + window.scrollY >=
//         document.documentElement.scrollHeight - 50;

//       if (bottom) {
//         loadMore();
//       }
//     }, 300),
//     []
//   );

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   return (
//     <div>
//       <h2 style={{ position: "sticky", top: 0, background: "white" }}>
//         Throttled Infinite Scroll
//       </h2>

//       {items.map((_, i) => (
//         <p key={i} style={{ padding: "20px", border: "1px solid #ddd" }}>
//           Item {i + 1}
//         </p>
//       ))}
//     </div>
//   );
// };

// export default Debounce;
