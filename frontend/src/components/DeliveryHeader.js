import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


export default class Navbar extends Component {


  
render() {
  return (

    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      
      <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
       
        <li className="navbar-item">
        <Link to="/view-delivery" className="nav-link">View Delivery</Link>
        </li>
       
        <li className="navbar-item">
        <Link to="/add-delivery" className="nav-link">Add Delivery</Link>
        </li>

        <li className="navbar-item">
        <Link to="/orderList" className="nav-link">Order List</Link>
        </li>

        <li className="navbar-item">
        <Link to="/admin-home" className="nav-link">Home</Link>
        </li>
       
      </ul>
      </div>
    </nav>
  );
}
}






