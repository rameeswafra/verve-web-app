import React from 'react';
import Cards from './Cards';
import Footer from './Footer';
import HomeNavBar from './HomeNavBar';
import Header from './Header/Header';


export default function home(){
    return(
        <div className='back'>
            <HomeNavBar/>
            <Cards/>
            <Footer/>
        </div>
    )
}