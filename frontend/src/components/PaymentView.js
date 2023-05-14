import React, {useState,useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import './PaymentView.css';
import {FiCheck} from 'react-icons/fi';
import { useLocation,useNavigate } from "react-router";
import { useParams } from "react-router";

const PaymentView = () => {

        const {id} = useParams();

        const [order,setOrder] = useState([]);
        const [payments,setPayments] = useState([]);
        const payment = [...payments];

        const { state } = useLocation();
        const navigate = useNavigate()

        useEffect(() =>{

            function getOrder() {
                axios.get(`http://localhost:5000/order/${id}`).then((res) => {
                    setOrder(res.data);
                    console.log(res.data)
                }).catch((err) => {
        
                    alert(err.message);
                })
            }
        
            getOrder();
        
        }, [])


        useEffect(() =>{

            function getPayments() {
                axios.get("http://localhost:5000/payment/view").then((res) => {
                    setPayments(res.data);
                    console.log(res.data)
                }).catch((err) => {
        
                    alert(err.message);
                })
            }
        
            getPayments();
        
        }, [])


        const takeInvoice = (e) => {
            e.preventDefault();

            var i = 0;
            var ID = "";

            while(i < payment.length){
                if(order.orderID == payment[i].IDOrder){
                  ID = payment[i]._id
                  break
                }
                i = i + 1
            }

            navigate(`/invoice/${ID}`, { state: { ...payment } })
            
        }


    return(
        <>
                <form onSubmit={takeInvoice}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 mx-auto mt-5">
                            <div class="payment">
                                <div class="payment_header">
                                <div class="check"><i><FiCheck/></i></div>
                                </div>
                                <div class="content1">
                                    <h1 style={{color:'black'}}>Payment Success !</h1>
                                    <p style={{color:'black'}}>Thank you for your purchase</p>
                                    <button className="btn" type="submit">Take a Receipt</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </div>
                </form>
        </>
    );
}

export default PaymentView;