import React from "react";

const CartItems = ({ cartItems, onIncrease, onDecrease, onRemove, onClose }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} style={styles.item}>
              <img src={item.thumbnail} width="60" alt="" />
              <div>
                <b>{item.title}</b>
                <p>${item.price}</p>

                <div>
                  <button onClick={() => onDecrease(item.id)}>-</button>
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <button onClick={() => onIncrease(item)}>+</button>
                </div>

                <button onClick={() => onRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default React.memo(CartItems);

const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0,
    width: "100%", height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "400px",
  },
  item: {
    display: "flex",
    gap: 10,
    padding: "10px 0",
    borderBottom: "1px solid #ddd",
  }
};


// ---- code with redux 
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { increaseQty, decreaseQty, removeItem } from "../redux/cartActions";

// const CartItems = ({ onClose }) => {
//   const cartItems = useSelector(state => state.cart.items);
//   const dispatch = useDispatch();

//   return (
//     <div style={modalStyles.overlay}>
//       <div style={modalStyles.modal}>
//         <h2>Your Cart</h2>
//         {cartItems.length === 0 ? (
//           <p>No items in cart</p>
//         ) : (
//           cartItems.map(item => (
//             <div key={item.id} style={modalStyles.item}>
//               <img src={item.thumbnail} width="60" alt="" />
//               <div>
//                 <b>{item.title}</b>
//                 <p>Price: ${item.price}</p>
//                 <div>
//                   <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
//                   <span style={{ margin: "0 10px" }}>{item.quantity}</span>
//                   <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
//                 </div>
//                 <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
//               </div>
//             </div>
//           ))
//         )}
//         <button onClick={onClose} style={{ marginTop: "10px" }}>Close</button>
//       </div>
//     </div>
//   );
// };

// const modalStyles = {
//   overlay: {
//     position: "fixed",
//     top: 0, left: 0, width: "100%", height: "100%",
//     background: "rgba(0,0,0,0.5)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   modal: {
//     background: "white",
//     padding: "20px",
//     borderRadius: "8px",
//     width: "400px"
//   },
//   item: {
//     display: "flex",
//     gap: "10px",
//     padding: "10px 0",
//     borderBottom: "1px solid #ddd"
//   }
// };

// export default CartItems;
