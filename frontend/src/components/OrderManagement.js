import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DeliveryHeader from './DeliveryHeader';
import "../App.css";
import './DownloadInvoice.css';
import {FiPrinter} from 'react-icons/fi';
import { useReactToPrint } from "react-to-print";


const OrderManagement = () => {

    const [orders,setOrders] = useState([]);
    const [q, setQ] = useState("");

    const navigate = useNavigate();

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

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

    const backHome = () => {
        navigate(-1);
    }


    return (

        <>
              <button className='btn' onClick={backHome}>Go Back</button>
              <br/>
    
              <div>
        
        <br/>

        <input type="text" className="search" placeholder="Search Products..." value={q} onChange={(e)=> setQ(e.target.value)}/>
    
         <div ref={componentRef} className="info">
    
       
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
    
         {orders?.filter((item)=> {
                            if(q === ""){
                                return item
                            }else if(item.orderID.toLowerCase().includes(q.toLowerCase())) {
                                return item
                            }
        }).map(item => (

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
    
       <button onClick={handlePrint} className="print__button btn btn2"><FiPrinter/> Print </button>
    
    
       </div>
       </div>
        </>
          
          
        
      )

}

export default OrderManagement;