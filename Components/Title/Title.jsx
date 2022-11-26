import React from 'react';
import styles from './title.module.scss'



const Title = ({title,suptitle}) => {
    return (
        <div >
            <h2 >{title}</h2>
            <p >{suptitle}</p>
        </div>
    );
};

export default Title;
