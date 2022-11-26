import React, { useEffect } from 'react';

//styles
import styles from './inst.module.scss'
import Image from "next/image";



const data = [
    {
        id: Math.random(),
        postTop: {
            ava: 'i1.svg',
            title: 'Foodieland.',
            location: 'Tokyo, Japan'
        },
        postCenter: {
            img: 'post1.svg',
            quantity: 'qnt1.svg',
        },
        postBottom: {
            ava: 'pb1.svg',
            nicName: 'Foodieland.',
            text: 'The vegetables dishes need to have certain vitamin for those people',
        },
        data: 'September 19'

    }
]

const InstagramItems = () => {
    const [instPost, setInstPost] = React.useState(data)

    useEffect(() => {
        setInstPost(data)
    })
    return (
        <div className={styles.inst__items}>
            {instPost.map(({id, postTop, postCenter, postBottom, data}) => (
                <div className={styles.inst__item}
                     key={id}>
                    <div className={styles.postTop}>
                        <Image src={'/img/' + postTop.ava} alt={'ava'} width={24.75} height={24.75}/>
                        <div>
                            <h3>{postTop.title} <span>
                                <svg width="9" height="8" viewBox="0 0 9 8" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd"
      d="M4.34733 0.373535L5.30024 0.994874L6.43781 0.987355L6.90353 2.02524L7.86457 2.63393L7.69524 3.75885L8.17464 4.79049L7.42401 5.64528L7.26956 6.77233L6.17596 7.0856L5.4367 7.95024L4.34733 7.62254L3.25796 7.95024L2.5187 7.0856L1.4251 6.77233L1.27065 5.64528L0.52002 4.79049L0.999421 3.75885L0.830085 2.63393L1.79113 2.02524L2.25685 0.987355L3.39442 0.994874L4.34733 0.373535ZM5.35949 3.09455L3.83703 4.71099L3.33518 4.17815C3.21805 4.05379 3.02228 4.04793 2.89791 4.16506C2.77355 4.2822 2.76769 4.47797 2.88482 4.60233L3.61185 5.37424C3.73397 5.5039 3.94009 5.5039 4.06221 5.37424L5.80985 3.51873C5.92698 3.39436 5.92112 3.19859 5.79675 3.08146C5.67239 2.96433 5.47662 2.97019 5.35949 3.09455Z"
      fill="#3897F0"/>
</svg>
                            </span>
                            </h3>
                            <p>{postTop.location}</p>
                        </div>
                        <span>
                            <svg width="12" height="4" viewBox="0 0 12 4" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd"
      d="M1.73336 0.719941C2.37401 0.719941 2.89336 1.23929 2.89336 1.87994C2.89336 2.52059 2.37401 3.03994 1.73336 3.03994C1.09271 3.03994 0.573364 2.52059 0.573364 1.87994C0.573364 1.23929 1.09271 0.719941 1.73336 0.719941ZM5.9867 0.719727C6.62735 0.719727 7.1467 1.23908 7.1467 1.87973C7.1467 2.52038 6.62735 3.03973 5.9867 3.03973C5.34605 3.03973 4.8267 2.52038 4.8267 1.87973C4.8267 1.23908 5.34605 0.719727 5.9867 0.719727ZM10.24 0.719727C10.8807 0.719727 11.4 1.23908 11.4 1.87973C11.4 2.52038 10.8807 3.03973 10.24 3.03973C9.59938 3.03973 9.08003 2.52038 9.08003 1.87973C9.08003 1.23908 9.59938 0.719727 10.24 0.719727Z"
      fill="#262626"/>
</svg>
                        </span>
                    </div>
                    <div className={styles.postCenter}>
                        <Image src={'/img/' + postCenter.img} alt={'ava'} width={290} height={290}/>
                        {/*<span>*/}
                        {/*  1/3*/}
                        {/*</span>*/}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InstagramItems;
