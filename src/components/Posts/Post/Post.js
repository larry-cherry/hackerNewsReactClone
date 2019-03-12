import React from 'react';
import './Post.css';

const post = (props) => {

    console.log(props);

    return (
        <div className="Post" >
            <a href={props.link} target="_blank" style={{}}>
                {props.title}
            </a>



        </div>
    );
}


export default post;