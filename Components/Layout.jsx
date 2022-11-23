import React from 'react';
import Header from "./Header/Header";




const Layout = ({children}) => {
    return (
        <div className='wrapper'>
            <Header/>
            {children}
            <footer></footer>
        </div>
    );
};

export default Layout;
