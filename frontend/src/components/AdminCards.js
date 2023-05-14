import React from 'react'
import CardItem from './CardItem'
import './AdminCards.css'

function AdminCards() {
  return (
    <div className='cards'>
      <h1>Welcome To Management Section</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                    src="images/product.jpg"
                    text="Manage Products Details"
                    label="Product Management"
                    path="/add"
                />
                <CardItem
                    src="images/delivery.jpg"
                    text="Manage All The Deliveries"
                    label="Delivery Management"
                    path="/add-delivery"
                />
                
                <CardItem
                    src="images/employee.jpg"
                    text="Maintain Employee Details"
                    label="Employee Management"
                    path="/add-employee"
                />
                
            </ul>

            <ul className='cards__items'>

                <CardItem
                    src="images/user.jpg"
                    text="Details of Users"
                    label="User Management"
                    path="/userManagement"
                />

                <CardItem
                    src="images/order.jpg"
                    text="Details of Orders"
                    label="Order Management"
                    path="/orderManagement"
                />
                
                
            </ul>
            
        </div>
      </div>
    </div>
  )
}

export default AdminCards