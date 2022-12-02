import React from 'react';
import styles from './more.module.scss'
import MoreRecipesItems from "./MoreRecipesItems";



const MoreRecipes = () => {
    return (
        <div className={styles.moreRecipes}>
            <div className={styles.title}>
                <h2>Try this delicious recipe
                    to make your day</h2>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqut enim ad minim </p>
            </div>
            <MoreRecipesItems />
        </div>
    );
};

export default MoreRecipes;
