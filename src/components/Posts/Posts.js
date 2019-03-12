import React from 'react';
import './Posts.css';
import Post from './Post/Post';

const posts = (props) => {
    const newsPost = [
        {title: "Mexican scientist cures human papilloma virus", link: "eluniversal.com.mx"},
        {title: "Jail time for tech companies who steal your data", link: "http://www.google.com"},
        {title: "Google terminated our business via our Google Play Developer Account", link: "usejournal.com"}
    ]

    const ourPosts = newsPost.map( (ele, index) => {
        return <Post key={index} title={ele.title} link={ele.link} />
    });

    return (
        <div className='Posts'>
            {ourPosts}
        </div>
    );
}

export default posts;