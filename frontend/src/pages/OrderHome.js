import React, {useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import axios from "axios";
import { toast } from 'react-toastify';
import OrderHeader from '../components/OrderHeader';

const OrderHome  = () => {
    const [data, setData]=useState([]);
    useEffect(() =>{
        getOrder();
    }, [] );

    const getOrder =async () => {
        const response = await axios.get("http://localhost:5000/order/")
        if (response.status===200){
            setData(response.data);
        }
    };

    const onDeleteOrder =async (id) =>{
        if(window.confirm ("Are you sure that you wanted to delete that order record")){
            const response =await axios.delete(`http://localhost:5000/order/${id}`);
            if(response.status===200){
                toast.success(response.data);
                getOrder();
            }
        }
    }


    console.log("data=>",data)

    return (
        <>
            <OrderHeader/>

                <div style ={{marginTop:"150px"}}>
            <table className="styled-table">
            <thead>
             <tr>
             <th style={{textAlign: "center"}}>Order ID</th>
            
             <th style={{textAlign: "center"}}>Address</th>
             <th style={{textAlign: "center"}}>Contact No</th>
             <th style={{textAlign: "center"}}>Quantity</th>
             
             <th style={{textAlign: "center"}}>Action</th>
             </tr>
             
             </thead>
             <tbody>
               {data && data.map((item,index) =>{
                   return(
                       <tr key ={index}>
                           <th scope="row">{index + 1}</th>
                           
                           <td>{item.address}</td>
                           <td>{item.contactNO}</td>
                           <td>{item.quantity}</td>

                           <td>
                               
                           
                               <Link to={`/view-order/${item.id}`}>
                                  < button className= "btn btn-view">Proceed to Checkout</button>
                               </Link>
                           </td>
                       </tr>
                   )
               }
               )}
             </tbody>
             </table>
             </div>
        </>
        
);           

};
export default OrderHome;