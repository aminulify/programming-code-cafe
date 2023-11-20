import React from 'react';
import './Cart.css';
// import {handleAddCart, pd} from '../Item/Item'

const Cart = (props) => {
    // console.log(props);
    const cart = props.cart;
    console.log(cart);

    const bookMarked = document.getElementById('bookmarked');
    let count = 0;
    for(const item of cart){
        // console.log(item.blogTitle);
        count++;        
    }
    for(const item of cart.slice(-1)){
        console.log(item.blogTitle);
        
        const p = document.createElement('p');
        p.innerText = item.blogTitle;
        p.classList.add('bookmarked');
        bookMarked.appendChild(p);
        
        
    }

    const time = props.time;
    // console.log(time);

    let total = 0;
    for(const item of time){
        total = total + item;
    }
    return (
        <div className='product-right-section'>
            <div className="time-zone">
                <b>Spend time on read: {total} min</b>
            </div>
            <div className="bookmarked-section">
                <p className='count-blog'>Bookmarked Blogs: {count}</p>
                <div id='bookmarked'></div>
            </div>
        </div>
    );
};

export default Cart;