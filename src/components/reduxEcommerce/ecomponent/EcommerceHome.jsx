import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import TopNavBar from './TopNavBar';
import CartItems from './cartItems';

const EcommerceHome = () => {
  const [itemList, setItemList] = useState([]);
  const allItemsRef = useRef([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch products
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        allItemsRef.current = data.products;
        setItemList(data.products);
        setLoading(false);
      });
  }, []);

  // --- Memoized functions ---
  const searchValues = useCallback((keyword) => {
    const filtered = allItemsRef.current.filter(item =>
      item.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setItemList(filtered);
  }, []);

  const filterByCategory = useCallback((category) => {
    const filtered = allItemsRef.current.filter(item =>
      item.category.toLowerCase().includes(category.toLowerCase())
    );
    setItemList(filtered);
  }, []);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  // Add product to cart
  const updateCart = useCallback((product) => {
    setCartItems(prev => {
      const existing = prev.find(p => p.id === product.id);

      if (existing) {
        return prev.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const decreaseQuantity = useCallback((id) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }, []);

  // --- Memoized derived values ---
  const totalCartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  return (
    <>
      <TopNavBar
        onSearch={searchValues}
        categorySelection={filterByCategory}
        cartCount={totalCartCount}
        onOpenCart={openCart}
      />

      {isCartOpen && (
        <CartItems
          cartItems={cartItems}
          onIncrease={updateCart}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
          onClose={closeCart}
        />
      )}


        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {itemList.map((item) => (
            <div key={item.id} style={{ width: '200px' }}>
              <img src={item.thumbnail} width="200" alt={item.title} />
              <h4>{item.title}</h4>
              <button onClick={() => updateCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
    </>
  );
};

export default EcommerceHome;


//---------- code with redux
// import React, { useEffect, useState, useRef } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartActions";
// import TopNavBar from "./TopNavBar";
// import CartItems from "./CartItems";

// const EcommerceHome = () => {
//   const [itemList, setItemList] = useState([]);
//   const allItemsRef = useRef([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then(res => res.json())
//       .then(data => {
//         setItemList(data.products);
//         allItemsRef.current = data.products;
//       });
//   }, []);

//   const searchValues = (keyword) => {
//     const filtered = allItemsRef.current.filter(item =>
//       item.title.toLowerCase().includes(keyword.toLowerCase())
//     );
//     setItemList(filtered);
//   };

//   const ByCategory = (category) => {
//     const filtered = allItemsRef.current.filter(item =>
//       item.category.toLowerCase().includes(category.toLowerCase())
//     );
//     setItemList(filtered);
//   };

//   const openCart = () => setIsCartOpen(true);
//   const closeCart = () => setIsCartOpen(false);

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//   };

//   return (
//     <div>
//       <TopNavBar
//         onSearch={searchValues}
//         categorySelection={ByCategory}
//         onOpenCart={openCart}
//       />

//       {isCartOpen && <CartItems onClose={closeCart} />}

//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//         {itemList.map(item => (
//           <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
//             <img src={item.thumbnail} width="100%" alt={item.title} />
//             <h4>{item.title}</h4>
//             <p>${item.price}</p>
//             <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EcommerceHome;
