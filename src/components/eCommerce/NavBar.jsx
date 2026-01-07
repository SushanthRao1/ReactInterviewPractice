import react from 'react';
import CartItems from './CartItems.jsx';


const TopNavBar = ({ onSearch, categorySelection, cartCount, onOpenCart, closeCart }) => {
    return <div style={{ margin: '10px', display: 'inline' }}>
        {console.log('ChildComponent rendered')}
        <p > Search: </p>
        <input type='text' onChange={(e) => onSearch(e.target.value)}></input>
        <button style={{ margin: '15px' }} onClick={(e) => categorySelection("beauty")}> Beauty </button>
        <button style={{ margin: '15px' }} onClick={(e) => categorySelection("fragrances")}> Fragrance </button>
        <button style={{ margin: '15px' }} onClick={(e) => categorySelection("groceries")}> groceries </button>
        <button style={{ marginLeft: '20%' }} onClick={onOpenCart}> Cart {cartCount <= 0 ? '' : cartCount} </button>
        {/* <CartItems cartItems={cartItems} /> */}

    </div>
};

export default TopNavBar;
