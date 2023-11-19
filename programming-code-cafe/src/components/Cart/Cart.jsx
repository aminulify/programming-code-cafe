import React from 'react';
import './Cart.css';
// import {handleAddCart, pd} from '../Item/Item'

const Cart = () => {
    // const {readTime} = props.pd;
    // console.log(props);
    return (
        <div className='product-right-section'>
            <div className="time-zone">
                <b>Spend time on read: 0 min</b>
            </div>
            <div className="bookmarked-section">
                <p className='count-blog'>Bookmarked Blogs: 0</p>
                <p className="bookmarked">Master Microsoft Power Platform and Become an In-Demand!</p>
            </div>
        </div>
    );
};

export default Cart;