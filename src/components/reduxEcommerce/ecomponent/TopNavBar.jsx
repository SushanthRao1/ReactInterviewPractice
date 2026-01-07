// import React from "react";
// import { useSelector } from "react-redux";

// const TopNavBar = ({ onSearch, categorySelection, onOpenCart }) => {
//   const cartCount = useSelector(state =>
//     state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
//   );

//   return (
//     <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
//       <input type="text" placeholder="Search" onChange={(e) => onSearch(e.target.value)} />
//       <button onClick={() => categorySelection("beauty")}>Beauty</button>
//       <button onClick={() => categorySelection("fragrances")}>Fragrance</button>
//       <button onClick={() => categorySelection("groceries")}>Groceries</button>
//       <button onClick={onOpenCart} style={{ marginLeft: "auto" }}>
//         Cart {cartCount > 0 ? `(${cartCount})` : ""}
//       </button>
//     </div>
//   );
// };

// export default TopNavBar;

import React from "react";

const TopNavBar = ({ onSearch, categorySelection, cartCount, onOpenCart }) => {
  return (
    <div style={{ margin: '10px' }}>
      <input 
        type="text" 
        placeholder="Search..." 
        onChange={(e) => onSearch(e.target.value)}
      />

      <button onClick={() => categorySelection("beauty")}>Beauty</button>
      <button onClick={() => categorySelection("fragrances")}>Fragrance</button>
      <button onClick={() => categorySelection("groceries")}>Groceries</button>

      <button onClick={onOpenCart}>
        Cart ({cartCount})
      </button>
    </div>
  );
};

export default React.memo(TopNavBar);

