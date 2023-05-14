import React from 'react';
import AdminCards from './AdminCards';
import Footer from './Footer';
import AdminNavBar from './AdminNavBar';
import Header from './Header/Header';


export default function AdminHome(){
    return(
        <div className='back'>
            <AdminNavBar/>
            <AdminCards/>
            <Footer/>
        </div>
    )
}