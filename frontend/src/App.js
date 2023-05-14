import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './screens/LandingPage/LandingPage';
import MyOrders from './screens/MyOrders/MyOrders';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import Delivery from './screens/Delivery/Delivery';

import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';
import Home from './components/Home';
import Tea from './components/Tea';
import Apparel from './components/Apparel';
import Spices from './components/Spices';
import Coconut from './components/Coconut';
import Rubber from './components/Rubber';
import Gem from './components/Gem';
import Cart from './components/Cart';
import AdminHome from './components/AdminHome';

import AddEmployee from './components/AddEmployee';
import ViewEmployees from './components/ViewEmployee';
import Salary from './components/Salary';

import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddEdit from './pages/AddEdit';
import OrderHome from './pages/OrderHome';
import About from './pages/About';
import { View } from './pages/View';
import Edit from './pages/Edit';
import PaymentHome from './components/PaymentHome';
import PaymentView from './components/PaymentView';

import { AddDelivery } from './components/AddDelivery';
import { DeliveryHome } from './components/DeliveryHome';
import { EditDelivery } from './components/EditDelivery';

import ContactUs from './components/ContactUs';
import DownloadInvoice from './components/DownloadInvoice';

import OrderList from './components/OrderList';
import UserManagement from './components/UserManagement';
import OrderManagement from './components/OrderManagement';

 const App = () =>{


 return (
   <Router>
     <div>
       
       <main>
         <Routes>
           <Route path="/" element={<LandingPage />} exact />
           <Route path="/register" element={<RegisterScreen />} exact />
           <Route path="/login" element={<LoginScreen />} exact />
           <Route path="/myorders" element={<MyOrders />} />
           <Route path="/profile" element={<ProfileScreen />} />
           <Route path="/delivery/:id" element={<Delivery />} />
           
           <Route path="/customer-home" element={<Home/>} />
           <Route path="/admin-home" element={<AdminHome/>} />
            <Route path="/view" element={<ViewProduct/>} />
            <Route path="/tea" element={<Tea/>} />
            <Route path="/apparel" element={<Apparel/>} />
            <Route path="/spices" element={<Spices/>} />
            <Route path="/coconut" element={<Coconut/>} />
            <Route path="/rubber" element={<Rubber/>} />
            <Route path="/gem" element={<Gem/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/add" element={<AddProduct/>} />

            <Route path="/add-employee" exact element={<AddEmployee/>} />
            <Route path="/View-employee" exact element={<ViewEmployees/>} />
            <Route path="/salary" exact element={<Salary/>} />

            <Route exact path ="/order-home" element = {<OrderHome/>}/>
            <Route path ="/add-order" element ={<AddEdit/>}/>
            <Route path ="/edit/:id" element ={<Edit/>}/>
            <Route path ="/view-order" element ={<View/>}/>
            <Route path ="/about" element ={<About/>}/>
            <Route path ="/payment-home/:id" element ={<PaymentHome/>}/>
            <Route path ="/payment-view/:id" element ={<PaymentView/>}/>

            <Route path="/view-delivery" element={<DeliveryHome />} />
            <Route path="/add-delivery" element={<AddDelivery />} />
            <Route path="/edit-delivery/:id" element={<EditDelivery />} />

            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/invoice/:id" element={<DownloadInvoice/>}/>

            <Route path="/orderList" element={<OrderList/>}/>
            <Route path="/userManagement" element={<UserManagement/>}/>
            <Route path="/orderManagement" element={<OrderManagement/>}/>

         </Routes>
       </main>
       
     </div>
   </Router>
 );
 }; 

export default App;
