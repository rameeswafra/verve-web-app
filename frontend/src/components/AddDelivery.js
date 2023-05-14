import React, { useState, useEffect } from 'react';
import DeliveryHeader from './DeliveryHeader';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import DatePicker from 'react-datepicker';


import "react-datepicker/dist/react-datepicker.css";



const deliveryList = ["choose...","Pending", "Delivered", "Arrived at destination", "Out for delivery", "Ready to pickup","unsuccessfull delivery attempt"]
export const AddDelivery = () => {

  const [date, setDate] = useState(new Date().toISOString())
  const [driverName, setDriverName] = useState("")
  const [vehicleNumber, setVehicleNumber] = useState("")
  const [nic, setNic] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [selectedDeliveryList, setSelectedDeliveryList] = useState("")

  // const [driverIdList, setDriverIdList] = useState([])
  const [selectedDriverId, setSelectedDriverId] = useState("D10001")
  const navigate = useNavigate()

  const [orders,setOrders] = useState([]);
  const [deliveries,setDelivery] = useState([]);

  const order = [...orders];
  const deliver = [...deliveries];

  useEffect(() =>{

    function getOrders() {
        axios.get('http://localhost:5000/order/').then((res) => {

            setOrders(res.data);
            console.log(res.data)
        }).catch((err) => {

            alert(err.message);
        })
    }

    getOrders();

}, [])

useEffect(() =>{

  function getDelivery() {
      axios.get('http://localhost:5000/delivery/view').then((res) => {

          setDelivery(res.data);
          console.log(res.data)
      }).catch((err) => {

          alert(err.message);
      })
  }

  getDelivery();

}, [])


  // useEffect(() => {
  //   axios.get("http://localhost:8070/delivery/view").then(({ data }) => {
  //     if (data && data.length) {
  //       setDriverIdList(data.map(item => item.driverId))
  //       setSelectedDriverId(data[0].driverId)
  //     }
  //   })
  // }, [])



  const onSubmit = (e) => {
    e.preventDefault();

    var OID = ""
    var cusName = ""
    var address = ""
    var n = 0;
    var i = 0;

    while(i < order.length){
      if(deliver[0] == null){
        OID = order[0].orderID
        cusName = order[0].name
        address = order[0].address
        break
      }

      if(order[i].orderID == deliver[n].deliverID){
        i = i+1
      }
      else{
        if(deliver[n+1] == null){
          OID = order[i].orderID
          cusName = order[i].name
          address = order[i].address
          break
        }
        else{
          n=n+1
        }
      }
    }

    console.log(OID);


    const delivery = { date,deliveryStatus: selectedDeliveryList , driverName,vehicleNumber,nic ,contactNumber,OID,cusName,address}
    console.log(delivery);

    if(order.length != deliver.length){
      axios.post('http://localhost:5000/delivery/add', delivery)
      .then((res) => {
        navigate("/view-delivery")
      });
    }
    else{
      alert('No More Orders');
      window.location.reload();
    }



  }
  return (

    <>
          <DeliveryHeader />
      <br />

    <div className="container">

      <h3>Add Details</h3>
      <form onSubmit={onSubmit}>

  <div className="contact-box">
  <div class="left"></div>
       

  <div className="form-group">
        
        <label>DriverName: </label>
        <input
          type="string"
          required
          className="form-control"
          value={driverName}
          onChange={({ target: { value } }) => { setDriverName(value);  }}
        
        />
      </div>
      <br/>
      <div className="form-group">
        
        <label>Date: </label>
        <input
          type="datetime-local"
          required
          className="form-control"
          value={date}
          onChange={({ target: { value } }) => { setDate(value); setDate(value); }}
        
        />
      </div>
        <br />
        <div className="form-group">
        
          <label>VehicleNumber: </label>
          <input
            type="string"
            required
            className="form-control"
            value={vehicleNumber}
            onChange={({ target: { value } }) => { setVehicleNumber(value);  }}
          
          />
        </div>
   <br/>

      <div className="form-group">
        
          <label>NIC: </label>
          <input
            type="string"
            required
            className="form-control"
            value={nic}
            onChange={({ target: { value } }) => { setNic(value);  }}
          
          />
        </div>  
   <div className="form-group">
        
        <label>ContactNumber: </label>
        <input
          type="string"
          required
          className="form-control"
          pattern='[0]{1}[0-9]{9}'
          value={contactNumber}
          onChange={({ target: { value } }) => { setContactNumber(value);  }}
        
        />
      </div>

     <br/>
      <div className=" select">

<label> DeliveryStatus: </label>
<select  onChange={({ target: { value } }) => { setSelectedDeliveryList(value) }} value={selectedDeliveryList} name="details" id="details-select">
  {
    deliveryList.map(item => <option key={item} value={item}>{item}</option>)
  }
</select>
</div>



        <br />
        <div className="form-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
        </div>

        <br />
      </form>
    </div>
    </>

  )

   }
        