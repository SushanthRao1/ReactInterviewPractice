const CartItems = ({ cartItems, onIncrease, onDecrease, onRemove, onClose }) => {
  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} style={modalStyles.item}>
              <img src={item.thumbnail} width="60" alt="" />
              <div>
                <b>{item.title}</b>  
                <p>Price: ${item.price}</p>

                <div>
                  <button onClick={() => onDecrease(item.id)}>-</button>
                  <span> {item.quantity} </span>
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

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0,
    width: "100%", height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "400px"
  },
  item: {
    display: "flex",
    gap: "10px",
    padding: "10px 0",
    borderBottom: "1px solid #ddd"
  }
};



export default CartItems;