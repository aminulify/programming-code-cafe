import React from 'react';
import "./Header.css";
import Blog from '../Blog/Blog';

const Header = () => {
    return (
        <div>
            <div className='header'>
            <div>
            <h2>Programming Cafe</h2>
            </div>
            <nav className='nav-icon'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href='#blog-section'>Blog</a></li>
                <li><a href="#">Contact</a></li>
                <li><img src="..\..\../public/img/profile.png" alt="" /></li>
            </nav>
            
        </div>
        <hr className='header-hr'/>
        </div>

    );
};

export default Header;