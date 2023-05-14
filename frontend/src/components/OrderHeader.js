import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import "./OrderHeader.css"
import {AiOutlineDingding} from 'react-icons/ai';


const OrderHeader = () => {
    const [activeTab, setActiveTab]= useState("Home");
    const location =useLocation();
    useEffect(() => {
         if (location.pathname === "/order-home"){
             setActiveTab("Home")
         }else if(location.pathname === "/add-order"){
             setActiveTab ("AddOrder")
         }else if(location.pathname=== "/about"){
             setActiveTab("About")
         }else{
            setActiveTab("CustomerHome")
         }
    }, [location])
    return(
        <div className="header">
            <p className= "logo">Order Management</p>
            <div className= "header-right">
                <Link to ="/customer-home">
                    <p className ={`${activeTab === "CustomerHome" ? "active": ""}`}onClick={() => setActiveTab("CustomerHome")}>Home</p>
                </Link>
                <Link to ="/add-order">
                    <p className ={`${activeTab === "AddOrder" ? "active": ""}`}onClick={() => setActiveTab("AddOrder")}>Add Order</p>
                </Link>
                <Link to ="/order-home">
                    <p className ={`${activeTab === "Home" ? "active": ""}`}onClick={() => setActiveTab("Home")}>View Order</p>
                </Link>
                <Link to ="/about">
                    <p className ={`${activeTab === "About" ? "active": ""}`}onClick={() => setActiveTab("About")}>About</p>
                </Link>
                
            </div>


        </div>
    )
}
export default OrderHeader;