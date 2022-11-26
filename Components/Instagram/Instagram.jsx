import React from 'react';

//styles
import styles from './inst.module.scss'
import InstagramItems from "./InstagramItems";



const Instagram = () => {
    return (
        <div className={styles.inst}>
            <din className={styles.inst__title}>
                <h2>Check out @foodieland on Instagram</h2>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqut enim ad minim </p>
            </din>
            <InstagramItems/>
        </div>
    );
};

export default Instagram;
