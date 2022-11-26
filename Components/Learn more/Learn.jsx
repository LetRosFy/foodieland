import React from 'react';
//Styles
import styles from './learn.module.scss'

//images
import learn from '../../public/img/learn.svg'
import Image from "next/image";
import Link from "next/link";


const Learn = () => {
    return (
        <div className={styles.learn}>
            <div className={styles.learn__items}>
                <div className={styles.learn__item}>
                    <h3>Everyone can be a
                        chef in their own kitchen</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore
                        et
                        dolore magna aliqut enim ad minim </p>
                </div>
                <div className={styles.learn__btn}>
                    <Link href={'/blog'}>Learn more</Link>
                </div>
            </div>
            <div className={styles.learn__img}>
                <Image src={learn} alt={learn}/>
            </div>
        </div>
    );
};

export default Learn;
