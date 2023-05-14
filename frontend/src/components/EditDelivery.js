import React, { useState, useEffect } from 'react';
import DeliveryHeader from './DeliveryHeader';
import axios from 'axios';
import { useNavigate, useParams, useLocation } from "react-router-dom"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const deliveryList = ["choose...","Pending", "Delivered", "Arrived at destination", "Out for delivery", "Ready to pickup","unsuccessfull delivery attempt"]
export const EditDelivery = ({ }) => {


   const [date, setDate] = useState(new Date().toISOString())
  const [driverName, setDriverName] = useState("")
  const [vehicleNumber, setVehicleNumber] = useState("")
  const [nic, setNic] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [selectedDeliveryList, setSelectedDeliveryList] = useState("pending")
  const navigate = useNavigate()
  const params = useParams()
  const { state } = useLocation()

  // useEffect(() => {
  //   axios.get("http://localhost:8070/delivery/view").then(({ data }) => {
  //     if (data && data.length) {
  //       setDriverIdList(data.map(item => item.driverId))
  //       setSelectedDriverId(data[0].driverId)
  //     }
  //   })
  // }, [])

  useEffect(() => {
    setDate(state.date)
    setContactNumber(state.contactNumber)
    setDriverName(state.driverName)
    setNic(state.nic)
    setVehicleNumber(state.vehicleNumber)
    setSelectedDeliveryList(state.deliveryList)
  }, [state])

  const onSubmit = (e) => {
    e.preventDefault();
    const delivery = { date,deliveryStatus: selectedDeliveryList , driverName,vehicleNumber,nic ,contactNumber}
    axios.put(`http://localhost:5000/delivery/update/${state._id}`, delivery)
      .then((res) => {
        navigate("/view-delivery")
      });



  }
  return (



    <div className="container">

      <DeliveryHeader />
      <br />

      <h3>Edit Details</h3>
      <form onSubmit={onSubmit}>


        


       

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
        
          <label>vehicleNumber: </label>
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
          <input type="submit" value="Update" className="btn btn-primary" />
        </div>

        <br />
      </form>
    </div>
  

  )

}       

