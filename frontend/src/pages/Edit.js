import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useNavigate, useParams, useLocation } from "react-router-dom"
import OrderHeader from '../components/OrderHeader';
import HomeNavBar from '../components/HomeNavBar';




export default function Edit (){

  
  const [address, setAddress] = useState("")
  const [contactNO,setContactNO] = useState("")
  const [quantity, setQuantity] = useState("")

  
  const navigate = useNavigate();
  const params = useParams();
  const { state } = useLocation();

  

  useEffect(() => {
    setAddress(state.address)
    setContactNO(state.contactNO)
    setQuantity(state.quantity)
    
  }, [state])

  const onSubmit = (e) => {

    e.preventDefault();
    const ID = state._id;
    const order = { ID,address,contactNO,quantity }

    axios.put('http://localhost:5000/order/update/:ID', order)
      .then((res) => {
        navigate("/view-order");
      });



  }
  return (

      <>
          <HomeNavBar/>

          <div className="container">

<br />

<h3>Edit Details</h3>
<form onSubmit={onSubmit}>


<div className="form-group">
    <label>Address: </label>
    <input
      type="text"
      required
      className="form-control"
      value={address}
      onChange={({ target: { value } }) => {setAddress(value); }}
    />
  </div>
 <br/>       
  <div className="form-group">
    <label>ContactNo: </label>
    <input
      type="text"
      required
      className="form-control"
      pattern='[0]{1}[0-9]{9}'
      value={contactNO}
      onChange={({ target: { value } }) => {setContactNO(value); }}
    />
  </div>
  <br/>

  
  <div className="form-group">
  
  <input type="submit" value="Update" className="btn btn-primary" />
                         
    
  </div>

  <br />
</form>
</div>
      </>

  )

}       