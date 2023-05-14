import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DeliveryHeader from './DeliveryHeader';
import "../App.css";
import './DownloadInvoice.css';
import {FiPrinter} from 'react-icons/fi';
import { useReactToPrint } from "react-to-print";


const OrderList = () => {

    const [orders,setOrders] = useState([]);

    

    useEffect(() =>{

        function getOrders() {
            axios.get("http://localhost:5000/order/").then((res) => {
    
                setOrders(res.data);
                console.log(res.data)
            }).catch((err) => {
    
                alert(err.message);
            })
        }
    
        getOrders();
    
    }, [])

    return (

        <>
              <DeliveryHeader/>
              <br/>
    
              <div>
        
        <br/>
    
         <div className="info">
    
       
         <table className="table background">
         <thead>
          <tr>
            <th>OrderId</th>
            <th>CustomerName</th>
            <th>Country</th>
            <th>Address</th>
             <th>Contact Number</th>
             <th>Amount</th>
           </tr>
         </thead>
        
         <tbody>
    
         {orders.map(item => (

             <tr key={item._id}>
               <td className='td'>{item.orderID}</td>
               <td className='td'>{item.name}</td>
               <td className='td'>{item.area}</td>
               <td className='td'>{item.address}</td>
               <td className='td'>{item.contactNO}</td>
               <td className='td'>{item.total}</td>
               
             </tr>
        
           ))}
    
         </tbody>
       </table>
    
       
    
    
    
       
       <br/><br/>
       <br/>
    
       
    
    
       </div>
       </div>
        </>
          
          
        
      )

}

export default OrderList;