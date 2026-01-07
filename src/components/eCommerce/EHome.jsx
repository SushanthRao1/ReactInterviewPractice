import react, { useEffect, useState, useRef } from 'react';
import TopNavBar from './NavBar.jsx'
import CartItems from './CartItems.jsx';

const EcommerceHome = () => {
    const [itemList, setItemlist] = useState([]);
    const AllListItems = useRef([]);
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
                setItemlist(data?.products);
                AllListItems.current = data?.products;
            })
    }, []);

    const searchValues = (itemName) => {
        const tempItems = AllListItems.current.filter(item =>
            item.title.toLowerCase().includes(itemName.toLowerCase())
        );
        setItemlist(tempItems);
    };

    const ByCategory = (category) => {
        const ByCategoryItems = AllListItems.current.filter(item =>
            item.category.includes(category)
        );
        setItemlist(ByCategoryItems);
    };

    const updateCart = (product) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);

            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    const decreaseQuantity = (id) => {
        setCartItems(prev =>
            prev
                .map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    return (
        <>
            <TopNavBar
                cartCount={cartItems.reduce((sum, i) => sum + i.quantity, 0)}
                onOpenCart={openCart}
            /> <br />

            {isCartOpen && (
                <CartItems
                    cartItems={cartItems}
                    onIncrease={updateCart}
                    onDecrease={decreaseQuantity}
                    onRemove={removeFromCart}
                    onClose={closeCart}
                />
            )}

            <span style={{ display: 'ruby' }}>
                {itemList.map((item, index) => (
                    <ul key={index}>
                        <img src={item.thumbnail} alt="" />
                        <br /> {item.title} <br />
                        <button onClick={() => updateCart(item)}>Add to Cart</button>
                    </ul>
                ))}
            </span>
        </>
    );
}

export default EcommerceHome;
