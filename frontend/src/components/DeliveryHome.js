import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DeliveryHeader from './DeliveryHeader';
import "../App.css";
import './DownloadInvoice.css';
import {FiPrinter} from 'react-icons/fi';
import { useReactToPrint } from "react-to-print";


export const DeliveryHome = () => {

  const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

  const [q, setQ] = useState("");
  const [data, setData] = useState([])
  const [orders,setOrders] = useState([]);
 
  const navigate = useNavigate()

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

 


  const getData = useCallback(() => {
    axios.get("http://localhost:5000/delivery/view").then(({ data }) => {
      if (data && data.length) {
        setData(data)
      }
    })
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/delivery/delete/${id}`).then(() => {
      window.location.reload()
    })
  }

  
    
  
  return (

    <>
          <DeliveryHeader/>
          <br/>

          <div>
    
    <br/>

     <input className="search" type="text" placeholder="Search..." value={q} onChange={(e)=> setQ(e.target.value)}/>
     <br/>
     <br/>
     <div ref={componentRef} className="info">

   
     <table className="table">
     <thead>
      <tr>
        <th>OrderId</th>
        <th>CustomerName</th>
        <th>Address</th>
        <th>driverName</th>
         <th>VehicleNumber</th>
         <th>NIC</th>
         <th>contactNumber</th>
         <th>deliveryStatus</th>
         <th>date</th>
         <th>Actions</th>
       </tr>
     </thead>
    
     <tbody>

     {data.filter((delivery)=> {
                         if(q == ""){
                             return delivery
                         }else if(delivery.nic.toLowerCase().includes(q.toLowerCase())) {
                             return delivery
                         }
                       })
   
      .map(item => (
         <tr key={item._id}>
           <td className='td'>{item.deliverID}</td>
           <td className='td'>{item.cusName}</td>
           <td className='td'>{item.address}</td>
           <td className='td'>{item.driverName}</td>
           <td className='td'>{item.vehicleNumber}</td>
           <td className='td'>{item.nic}</td>
           <td className='td'>{item.contactNumber}</td>
           <td className='td'>{item.deliveryStatus}</td>
           <td className='td'>{item.date}</td>
           <td>
          
             <button className="button" onClick={() => { navigate(`/edit-delivery/${item._id}`, { state: { ...item } }) }}>Edit</button><button className="button" onClick={() => { handleDelete(item._id) }}>Delete</button>
            
             </td>
         </tr>
    
       ))}

     </tbody>
   </table>

   



   
   <br/><br/>
   <br/>
   <button onClick={handlePrint} className="print__button btn btn1"><FiPrinter/> Print </button>
<br/>
<br/>
<br/>
<br/>



   </div>
   </div>
    </>
      
      
    
  )
}



