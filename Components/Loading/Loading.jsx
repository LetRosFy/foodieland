import React from 'react';
import styles from './loading.module.scss'
import logo from '../../public/img/logo..svg'
import Image from "next/image";



const Loading = () => {
    return (
        <div className={styles.loading}>
            <span className={styles.loader}>Foodieland.</span>

        </div>
    );
};

export default Loading;
