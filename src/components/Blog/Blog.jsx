import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-section' id='blog-section'>
            <h1 className='blog-heading'>Blog</h1>

            <div className="blog">
            <h3 className="blog-subtitle">Props vs State?</h3>
            <p className='paragraph'>Props are used to pass data from a parent component to a child component. Props are immutable and cannot be changed within a component. State is used to manage data within a component. State is mutable and can be updated using the setState function.</p>
            </div>
            <div className="blog">
            <h3 className="blog-subtitle">How does useState work?</h3>
            <p className='paragraph'>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
            </div>
            <div className="blog">
            <h3 className="blog-subtitle">Purpose of useEffect other than fetching data?</h3>
            <p className='paragraph'>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
            </div>
            <div className="blog">
            <h3 className="blog-subtitle">How does react work?</h3>
            <p className='paragraph'>React relies on a virtual DOM, which is a copy of the actual DOM. React's virtual DOM is immediately reloaded to reflect this new change whenever there is a change in the data state. After which, React compares the virtual DOM to the actual DOM to figure out what exactly has changed.</p>
            </div>

        </div>
    );
};

export default Blog;