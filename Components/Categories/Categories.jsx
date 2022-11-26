import React from 'react';
import styles from './categories.module.scss'
import Link from "next/link";
import Image from "next/image";

const items = [
    {
        id:Math.random(),
        title:'Breakfast',
        img:"c1.svg",
    },
    {
        id:Math.random(),
        title:'Vegan',
        img:"c2.svg",
    },
    {
        id:1,
        title:'Meat',
        img:"c3.svg",
    },
    {
        id:Math.random(),
        title:'Dessert',
        img:"c4.svg",
    },
    {
        id:Math.random(),
        title:'Lunch',
        img:"c5.svg",
    },
    {
        id:Math.random(),
        title:'Chocolate',
        img:"c6.svg",
    },
]


const Categories = () => {
    return (
        <div className={styles.categories }>
            <div className={styles.title}>
                <h2>Categories</h2>
                <Link href={'/recipes'}>View All Categories</Link>
            </div>
            <div className={styles.items}>
                {items.map(item=>(
                    <div className={styles.item} key={item.id}>
                        <Image src={"/img/" + item.img} alt="content" width={100} height={100}/>
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Categories;
