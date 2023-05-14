import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HomeNavBar from '../components/HomeNavBar';
import { useSelector } from "react-redux";
import './View.css';
import { Link } from 'react-router-dom';


//import Header from './Header';


export const View = () => {
  const [q, setQ] = useState("");
  const [data, setData] = useState([])
  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const {cart} = useSelector(state => state.cart);

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel"
    }
  }


  const getData = useCallback(() => {
    axios.get("http://localhost:5000/order/").then(({ data }) => {
      if (data && data.length) {
        setData(data)
      }
    })
  }, [])

  useEffect(() => {
    getData();
  }, [getData])

  const handleDelete = (id) => {

    axios.delete(`http://localhost:5000/order/delete/${id}`).then(() => { 
      window.location.href = "/add-order"
    }).catch((err) => {
      alert(err.message)
    })
  }


  


  return (

      <>
          <HomeNavBar/>

          <br/><br/>

          <div className="container">
     
            <form>
            <table className="styled-table">
        <thead>
          
        </thead>
        <tbody>

        
        {data.map((item) => {

            if(userInfo?.name == item.name){
              return(
                <tr key={item._id}>
                <div className='row'>OrderID: {item.orderID}</div><br/>
                <div className='row'>Customer: {userInfo?.name}</div><br/>
                <div className='row'>Address: {item.address}</div><br/>
                <div className='row'>Phone: {item.contactNO}</div><br/>
                <div className='row'>Date: {date}</div>
                
                <div><td className='button'><button className = "btn btncolor" onClick={() => { navigate(`/edit/${item._id}`, { state: { ...item } }) }}>EDIT</button></td>
                <td className='button'><button className = "btn btncolor" onClick={() => { const confirmBox = window.confirm(
                                                        "Do you really want to cancel the order?"
                                                      )
                                                      if (confirmBox === true) {
                                                        handleDelete(item._id)
                                                      } }}>CANCEL
                </button></td>
                <td className='button'>
                <button className ="btn btncolor" onClick={() => { navigate(`/payment-home/${item._id}`, { state: { ...item } }) }}>PROCEED TO PAY</button></td></div>
  
                
              </tr>
              )
            }

        })}
          
        </tbody>
      </table>
            </form>
      
          </div>
      
      </>
      
    
  )
}

