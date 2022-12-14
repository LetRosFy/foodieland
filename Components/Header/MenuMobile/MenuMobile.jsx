import React from 'react';
import styles from '../header.module.scss'
import Link from "next/link";



const MenuMobile = ({openMenu, setOpenMenu}) => {

    const handleChange=(e)=>{
        e.stopPropagation()
    }
const closeMenu=()=>{
        setOpenMenu(false)
    }
    return (
        <>
            <div className={openMenu ? styles.mobileOpen : styles.mobile}
            onChange={handleChange}>
                <nav className={styles.mobileNav}>
                    <ul onClick={closeMenu}>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/recipes'>Recipes</Link></li>
                        <li><Link href='/blog'>Blog</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                        <li><Link href='/about'>About us</Link></li>
                    </ul>
                </nav>
                <div className={styles.socialMobile}>
                    <ul>
                        <li>
                            <a href="">
                                <svg width="20" height="31" viewBox="0 0 20 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.2832 5.12072H19.92V0.217165C19.2926 0.150345 17.1348 0 14.6217 0C9.37822 0 5.78628 2.55329 5.78628 7.24611V11.565H0V17.0468H5.78628V30.84H12.8805V17.0481H18.4328L19.3142 11.5663H12.8789V7.78967C12.8805 6.20527 13.4316 5.12072 16.2832 5.12072V5.12072Z" fill="black"/>
                                </svg>

                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.9617 3.30056C31.7717 3.86031 30.5037 4.23133 29.1817 4.41147C30.5417 3.54076 31.5797 2.1725 32.0677 0.523286C30.7997 1.33395 29.3997 1.90656 27.9077 2.22611C26.7037 0.851412 24.9877 0 23.1157 0C19.4837 0 16.5597 3.16116 16.5597 7.03648C16.5597 7.59408 16.6037 8.13024 16.7117 8.64066C11.2577 8.35542 6.43167 5.55241 3.18967 1.28248C2.62367 2.33549 2.29167 3.54076 2.29167 4.83825C2.29167 7.27454 3.46167 9.43416 5.20567 10.6845C4.15167 10.663 3.11767 10.3349 2.24167 9.81805C2.24167 9.8395 2.24167 9.86738 2.24167 9.89526C2.24167 13.3138 4.51567 16.1532 7.49767 16.8074C6.96367 16.9639 6.38167 17.039 5.77767 17.039C5.35767 17.039 4.93367 17.0132 4.53567 16.9189C5.38567 19.7047 7.79767 21.7528 10.6657 21.8193C8.43367 23.6916 5.59967 24.8196 2.53167 24.8196C1.99367 24.8196 1.47767 24.7939 0.96167 24.7231C3.86767 26.7326 7.31167 27.88 11.0257 27.88C23.0977 27.88 29.6977 17.1569 29.6977 7.86216C29.6977 7.55119 29.6877 7.25094 29.6737 6.95284C30.9757 5.96203 32.0697 4.72459 32.9617 3.30056Z" fill="black"/>
                                </svg>


                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.9617 0H22.9617C28.4837 0 32.9617 4.478 32.9617 10V22C32.9617 27.522 28.4837 32 22.9617 32H10.9617C5.43967 32 0.96167 27.522 0.96167 22V10C0.96167 4.478 5.43967 0 10.9617 0ZM22.9617 29C26.8217 29 29.9617 25.86 29.9617 22V10C29.9617 6.14 26.8217 3 22.9617 3H10.9617C7.10167 3 3.96167 6.14 3.96167 10V22C3.96167 25.86 7.10167 29 10.9617 29H22.9617Z" fill="black"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.96167 16C8.96167 11.582 12.5437 8 16.9617 8C21.3797 8 24.9617 11.582 24.9617 16C24.9617 20.418 21.3797 24 16.9617 24C12.5437 24 8.96167 20.418 8.96167 16ZM11.9617 16C11.9617 18.756 14.2057 21 16.9617 21C19.7177 21 21.9617 18.756 21.9617 16C21.9617 13.242 19.7177 11 16.9617 11C14.2057 11 11.9617 13.242 11.9617 16Z" fill="black"/>
                                    <circle cx="25.5617" cy="7.40023" r="1.066" fill="black"/>
                                </svg>


                            </a>
                        </li>
                    </ul>
                </div>
                <a className={styles.btn}
                    onClick={()=>setOpenMenu(false)}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.625 8.59375V6.64062C15.625 6.12262 15.4192 5.62584 15.0529 5.25956C14.6867 4.89328 14.1899 4.6875 13.6719 4.6875H4.29688C3.77887 4.6875 3.28209 4.89328 2.91581 5.25956C2.54953 5.62584 2.34375 6.12262 2.34375 6.64062V18.3594C2.34375 18.8774 2.54953 19.3742 2.91581 19.7404C3.28209 20.1067 3.77887 20.3125 4.29688 20.3125H13.6719C14.1899 20.3125 14.6867 20.1067 15.0529 19.7404C15.4192 19.3742 15.625 18.8774 15.625 18.3594V16.4062M18.75 8.59375L22.6562 12.5L18.75 16.4062M9.32617 12.5H22.6562" stroke="#666666" strokeWidth="1.5625" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    EXIT
                </a>
            </div>

        </>
    );
};

export default MenuMobile;
