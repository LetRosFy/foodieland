import React from 'react';
import styles from '../slaider.module.scss'
import SlaiderItem from "./SlaiderItem";





const Slaider = () => {
    return (
        <div className={styles.slaider}>
            <SlaiderItem/>
        </div>
    );
};

export default Slaider;
