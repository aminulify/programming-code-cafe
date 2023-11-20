import React, { useEffect, useState } from 'react';
import './Store.css';
import Item from '../Item/Item';
import Cart from '../Cart/Cart';

const Store = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [time, setTime] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddItem = (pd) =>{
        const newCart = [...cart, pd];
        setCart(newCart);
    }

    const countTime = (pd)=>{
        const newTime = [...time, pd];
        setTime(newTime);
    }
    return (
        <div className='store-container'>
            <div className="products-container">
                {
                    products.map(pd=><Item
                    key={pd.id}
                    pd={pd}
                    handleAddItem={handleAddItem}
                    countTime = {countTime}
                    ></Item>)
                }
            </div>

            <div className="bookmarked-container">
                <Cart cart={cart} time={time}></Cart>
            </div>
        </div>
    );
};

export default Store;