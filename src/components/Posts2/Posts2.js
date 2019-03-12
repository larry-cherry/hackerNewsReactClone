import React from 'react';
import './Posts2.css';
import Post from './Post2/Post2';

const postsData = [
    {link: 'www.google.com', title: 'Google title'},
    {link: 'www.yahoo.com', title: 'Yahoo title'},
    {link: 'www.bing.com', title: 'Bing title'}
]

const posts2 = (props) => {
    return (
        <div><Post title="">I like tacos and beef with spicy food</Post></div> // props.children between opening and closing tabs

        // AXIOS // https://www.npmjs.com/package/axios // GET and POST req's
        // consume API's :: 

        
    );
}

export default posts2