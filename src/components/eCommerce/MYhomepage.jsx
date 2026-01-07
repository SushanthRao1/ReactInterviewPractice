import react, { useEffect, useState, useRef } from 'react';
import TopNavBar from './NavBar.jsx'
import CartItems from './CartItems.jsx';

const EcommerceHome = () => {
    const [itemList, setItemlist] = useState([]);
    const AllListItems = useRef([]);
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
                setItemlist(data?.products)
                AllListItems.current = data?.products
            })
    }, [])

    const searchValues = (itemName) => {
        let tempItems = [];
        tempItems = AllListItems.current.filter((items) => items.title.includes(itemName));
        setItemlist(tempItems);
    }

    const ByCategory = (category) => {
        const ByCategoryItems = AllListItems.current.filter((items) => items.category.includes(category));
        setItemlist(ByCategoryItems);
    }

    // const updateCart = (itemId) =>{
    //     console.log('prev', prevCount)
    //     setItemCount(prev => prev + 1);
    //     setCartItems(prev => [...prev, itemId]);
    // }

    const updateCart = (product) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);

            if (existingItem) {
                // increase quantity
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.stock + 1 }
                        : item
                );
            } else {
                // add new product
                return [...prev, { ...product, stock: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };


    const decreaseQuantity = (id) => {
        setCartItems(prev =>
            prev
                .map(item =>
                    item.id === id
                        ? { ...item, quantity: item.stock - 1 }
                        : item
                )
                .filter(item => item.stock > 0)  // remove if 0
        );
    };



    return <>
        {console.log('parentComponent rendered')}
        {/* <TopNavBar 
            onSearch={searchValues} 
            categorySelection={ByCategory} 
            cartCount={itemCount}
            cartItems={cartItems}
        /> */}
        <TopNavBar
            cartCount={cartItems.reduce((sum, i) => sum + i.quantity, 0)}
            onOpenCart={openCart}
            onCloseCart={closeCart}
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

        <span style={{ display: 'ruby' }}>
            {itemList.map((item, index) => (
                <ul key={index}><img src={item.thumbnail}></img> <br /> {item?.title} <br />
                    <button onClick={e => updateCart(item)}>Add to Cart </button>
                </ul>
            ))}
        </span>
    </>
}

export default EcommerceHome