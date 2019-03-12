import React from 'react';
import './Post2.css';

const post2 = (props) => {
    return (        
        <div>
            <a href={props.link}>
                {props.children}
            </a>
        </div>
    );
}


export default post2;