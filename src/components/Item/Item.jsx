import React from 'react';
import './Item.css';

const item = (props) => {
    // console.log(props)
    const {coverImage, authorImage, authorName, blogTitle, readTime, publishDate} = props.pd;

    const handleAddItem = props.handleAddItem;

    const countTime = props.countTime;
    // console.log(countTime);
    
    return (
        <main>
            <div className='cover-img'>
                 <img src={coverImage} alt="" />
            </div>

            <div className='title-section'>

                <div className='title-left'>
                    <div>
                        <img src={authorImage} alt="" />
                    </div>
                    <div>
                        <b>{authorName}</b>
                        <p>{publishDate}</p>
                    </div>
                </div>

                <div className='title-right'>
                    {
                        (readTime<9) ? <p>0{readTime} min read <i onClick={()=>handleAddItem(props.pd)} class="fa-regular fa-bookmark"></i></p> : <p>{readTime} min read <i onClick={()=>handleAddItem(props.pd)} class="fa-regular fa-bookmark"></i></p>
                    }
                </div>          
            </div>
            <h1>{blogTitle}</h1>
            <div className="tags">
            <p>#beginner</p>
            <p>#programming</p>
            </div>
            <u onClick={()=>{countTime(readTime)}} className='mark-link'>Mark as read...</u>
            <hr/>

        </main>
    );
};

export default item;