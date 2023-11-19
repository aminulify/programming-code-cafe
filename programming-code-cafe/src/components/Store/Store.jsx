import React, { useEffect, useState } from 'react';
import './Store.css';
import Item from '../Item/Item';
import Cart from '../Cart/Cart';

const Store = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='store-container'>
            <div className="products-container">
                {
                    products.map(pd=><Item
                    key={pd.id}
                    pd={pd}
                    ></Item>)
                }
            </div>

            <div className="bookmarked-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Store;