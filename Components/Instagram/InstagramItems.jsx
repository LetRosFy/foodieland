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

    },
    {
        id: Math.random(),
        postTop: {
            ava: 'i1.svg',
            title: 'Foodieland.',
            location: 'Tokyo, Japan'
        },
        postCenter: {
            img: 'i2.svg',
            quantity: 'qnt1.svg',
        },
        postBottom: {
            ava: 'pb1.svg',
            nicName: 'Foodieland.',
            text: 'The vegetables dishes need to have certain vitamin for those people',
        },
        data: 'September 19'

    },
    {
        id: Math.random(),
        postTop: {
            ava: 'i1.svg',
            title: 'Foodieland.',
            location: 'Tokyo, Japan'
        },
        postCenter: {
            img: 'i3.svg',
            quantity: 'qnt1.svg',
        },
        postBottom: {
            ava: 'pb1.svg',
            nicName: 'Foodieland.',
            text: 'The vegetables dishes need to have certain vitamin for those people',
        },
        data: 'September 19'

    },
    {
        id: Math.random(),
        postTop: {
            ava: 'i1.svg',
            title: 'Foodieland.',
            location: 'Tokyo, Japan'
        },
        postCenter: {
            img: 'i4.svg',
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
                    <div className={styles.postBottom}>
                        <div className={styles.bottomTop}>
                            <div>
                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M10.0081 2.25665L9.5015 1.66459C7.46296 -0.373949 4.21201 -0.235034 2.17347 1.8035C0.134936 3.84204 0.527258 7.7832 2.56579 9.82174C3.39315 10.6491 4.63217 11.7946 6.28285 13.2584L7.67155 14.4801L9.23129 15.834C9.66075 16.2046 10.2953 16.2103 10.7313 15.8474L11.9948 14.788C14.2076 12.918 15.8496 11.445 16.9209 10.3692L17.1989 10.0856L17.4486 9.82174C19.3471 7.77441 19.835 3.79463 17.8439 1.8035L17.6996 1.66459C15.6523 -0.233931 12.5651 -0.326542 10.5739 1.66459L10.0081 2.25665ZM2.99374 2.6236C4.6057 1.01164 7.09948 0.936068 8.65131 2.45503L9.96057 3.98519L11.4126 2.4659C12.9019 0.97698 15.2755 0.998504 16.9109 2.51501L17.0392 2.63889C18.4463 4.0462 18.2069 7.29787 16.598 9.03284L16.3564 9.28814L16.0882 9.56149C15.2002 10.4528 13.884 11.6469 12.1487 13.1339L11.2461 13.9019L9.98924 14.9557L8.43197 13.6039L7.31742 12.6249C5.74693 11.2368 4.5354 10.1266 3.68713 9.29861L3.38606 9.00135C1.70674 7.32202 1.4967 4.12064 2.99374 2.6236Z"
                                          fill="#262626"/>
                                </svg>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M17.5467 8.70686C17.5467 4.00876 13.7381 0.200195 9.03999 0.200195C4.34189 0.200195 0.533325 4.00876 0.533325 8.70686C0.533325 13.405 4.34189 17.2135 9.03999 17.2135C10.0654 17.2135 11.474 16.8395 13.2659 16.0913L16.1634 17.2216L16.2493 17.2495C16.6238 17.3477 17.0207 17.1516 17.1649 16.7822C17.2225 16.6344 17.2333 16.4725 17.1958 16.3184L16.3879 12.9958L16.5202 12.6792C17.2045 11.0124 17.5467 9.68828 17.5467 8.70686ZM15.4365 12.2643L15.1699 12.8957L15.8933 15.8709L13.2511 14.8402L12.5295 15.1395C11.0078 15.7536 9.8323 16.0533 9.04 16.0533C4.98255 16.0533 1.69333 12.7641 1.69333 8.70667C1.69333 4.64921 4.98255 1.36 9.04 1.36C13.0975 1.36 16.3867 4.64921 16.3867 8.70667C16.3867 9.5152 16.075 10.7137 15.4365 12.2643Z"
                                          fill="#262626"/>
                                </svg>
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M17.5748 1.0732L9.31158 15.1893C9.05142 15.6337 8.38425 15.5439 8.25083 15.0465L6.12389 7.11552L6.10635 7.09073C6.09055 7.06337 6.07724 7.03525 6.06634 7.00665L0.250997 1.19032C-0.114383 0.824938 0.144394 0.200195 0.661119 0.200195H17.0743C17.5223 0.200195 17.8011 0.686548 17.5748 1.0732ZM15.4866 2.34366L7.31125 7.0637L9.01164 13.4051L15.4866 2.34366ZM2.06135 1.35997L14.8718 1.35924L6.74999 6.04835L2.06135 1.35997Z"
                                          fill="#262626"/>
                                </svg>
                            </div>
                            <div>
                                <svg width="22" height="5" viewBox="0 0 22 5" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.26666 4.64024C4.54796 4.64024 5.58666 3.60154 5.58666 2.32024C5.58666 1.03894 4.54796 0.000244141 3.26666 0.000244141C1.98535 0.000244141 0.946655 1.03894 0.946655 2.32024C0.946655 3.60154 1.98535 4.64024 3.26666 4.64024Z"
                                          fill="#3897F0"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M11.0001 4.64024C12.2814 4.64024 13.3201 3.60154 13.3201 2.32024C13.3201 1.03894 12.2814 0.000244141 11.0001 0.000244141C9.71875 0.000244141 8.68005 1.03894 8.68005 2.32024C8.68005 3.60154 9.71875 4.64024 11.0001 4.64024Z"
                                          fill="black" fillOpacity="0.15"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M18.7333 4.64024C20.0146 4.64024 21.0533 3.60154 21.0533 2.32024C21.0533 1.03894 20.0146 0.000244141 18.7333 0.000244141C17.452 0.000244141 16.4133 1.03894 16.4133 2.32024C16.4133 3.60154 17.452 4.64024 18.7333 4.64024Z"
                                          fill="black" fillOpacity="0.15"/>
                                </svg>
                            </div>
                            <div>
                                <svg width="16" height="19" viewBox="0 0 16 19" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M0.0522461 0.951852V17.6964C0.0522461 17.8996 0.132235 18.0946 0.274915 18.2393C0.574787 18.5435 1.06442 18.5469 1.36855 18.247L7.97949 11.7285L14.5904 18.247C14.7351 18.3897 14.9302 18.4697 15.1334 18.4697C15.5605 18.4697 15.9067 18.1235 15.9067 17.6964V0.951852C15.9067 0.738302 15.7336 0.565186 15.5201 0.565186H0.438913C0.225363 0.565186 0.0522461 0.738302 0.0522461 0.951852ZM1.21223 16.772V1.72511H14.7467V16.772L8.52244 10.6348C8.22134 10.3379 7.7376 10.3379 7.4365 10.6348L1.21223 16.772Z"
                                          fill="#262626"/>
                                </svg>
                            </div>
                        </div>
                        <div className={styles.bottomCenter}>
                            <Image src={'/img/' + postBottom.ava} alt={postBottom.text} width={13.15} height={13.15}/>
                            <p>Liked by <span>craig_love</span> and <span>44,686</span></p>
                        </div>
                        <p>
                            <span>{postBottom.nicName}</span>{postBottom.text}</p>
                        <p>September 19</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InstagramItems;
