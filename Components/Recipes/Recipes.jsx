import React from 'react';
import styles from './recipes.module.scss'

import Title from "../Title/Title";
import { RecipesItem }from "./RecipesItem/RecipesItem";



const RecipesHome = () => {
    return (
        <div className={`${styles.recipes}`}>
            <Title title={'Simple and tasty recipes'}
                   suptitle={'Lorem ipsum dolor sit amet, consectetuipisicing elit, ' +
                       'sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim '}
           />
            <RecipesItem/>
        </div>
    );
};

export default RecipesHome;
