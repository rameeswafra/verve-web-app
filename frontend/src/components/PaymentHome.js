import React, {useState,useEffect} from 'react';
import { useSelector } from "react-redux";
import './PaymentHome.css'
import axios from 'axios';
import swal from 'sweetalert';
import { useLocation,useNavigate } from 'react-router';

const PaymentHome = () => {

    
    const navigate = useNavigate()

    const { state } = useLocation();
    const [orders,setOrders] = useState([]);
    const order = [...orders];

    const [cardName,setCardName] = useState("")
    const [cardNumber,setCardNumber] = useState("")
    const [expiry,setExpiry] = useState("")
    const [cvv,setCVV] = useState("")
    const [street,setStreet] = useState("")
    const [city,setCity] = useState("")
    const [states,setState] = useState("")
    const [zip,setZip] = useState("")

    var amount;

    const IDOrder = state.orderID

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


    const addPayment = (e) => {
    
      e.preventDefault();

      var i = 0;
      var ID = "";

      while(i < order.length){
          if(state.orderID == order[i].orderID){
            ID = order[i]._id;
            amount = order[i].total
            break;
          }
          i = i + 1;
      }
        
      const newPayment = {
          cardName,
          cardNumber,
          expiry,
          cvv,
          street,
          city,
          states,
          zip,
          amount,
          IDOrder
      }


      axios.post('http://localhost:5000/payment/add',newPayment).then(()=> {
            navigate(`/payment-view/${ID}`, { state: { ...order } })
          }).catch((err)=> {
            console.log(err.message)
          })
    
    }


   


    return(
        
      <div class="container mt-5 px-5">
            {orders.map((data) => {
                if(state.orderID == data.orderID){
                    return(
                        <form onSubmit={addPayment} method="post">
    
          <div class="mb-4">
    
              <h2>Confirm order and pay</h2>
          <span>please make the payment, after that you can enjoy all the features and benefits.</span>
              
          </div>
    
      <div class="row">
    
          
          <div class="col-md-8">
              
    
              <div class="card p-3">
    
                  <h6 class="text-uppercase">Payment details</h6>
                  <div class="inputbox mt-3"> <input type="text" name="cardName" class="form-control" required="required" onChange={(e)=> {setCardName(e.target.value)}}/> <span>Name on card</span> </div>
    
    
                  <div class="row">
    
                      <div class="col-md-6">
    
                          <div class="inputbox mt-3 mr-2"> <input type="number" name="cardNumber" class="form-control" required="required" min="1000000000000000" max="9999999999999999" onChange={(e)=> {setCardNumber(e.target.value)}}/> <i class="fa fa-credit-card"></i> <span>Card Number</span> 
    
    
                          </div>
                          
    
                      </div>
    
                      <div class="col-md-6">
    
                           <div class="d-flex flex-row">
    
    
                               <div class="inputbox mt-3 mr-2"> <input type="text" name="expiry" class="form-control" required="required" maxLength="5" minLength="5" pattern="[0-9]{2}/[0-9]{2}" placeholder="MM/YY" onChange={(e)=> {setExpiry(e.target.value)}}/> <span>Expiry</span> </div>
    
                            <div class="inputbox mt-3 mr-2"> <input type="number" name="cvv" class="form-control" required="required" min="100" max="999" placeholder='xxx' onChange={(e)=> {setCVV(e.target.value)}}/> <span>CVV</span> </div>
                               
    
                           </div>
                          
    
                      </div>
                      
    
                  </div>
    
    
    
                  <div class="mt-4 mb-4">
    
                      <h6 class="text-uppercase">Billing Address</h6>
    
    
                      <div class="row mt-3">
    
                          <div class="col-md-6">
    
                              <div class="inputbox mt-3 mr-2"> <input type="text" name="street" class="form-control" required="required" onChange={(e)=> {setStreet(e.target.value)}}/> <span>Street Address</span> </div>
                              
    
                          </div>
    
    
                           <div class="col-md-6">
    
                              <div class="inputbox mt-3 mr-2"> <input type="text" name="city" class="form-control" required="required" onChange={(e)=> {setCity(e.target.value)}}/> <span>City</span> </div>
                              
    
                          </div>
    
    
                          
    
                      </div>
    
    
                      <div class="row mt-2">
    
                          <div class="col-md-6">
    
                              <div class="inputbox mt-3 mr-2"> <input type="text" name="state" class="form-control" required="required" onChange={(e)=> {setState(e.target.value)}}/> <span>State/Province</span> </div>
                              
    
                          </div>
    
    
                           <div class="col-md-6">
    
                              <div class="inputbox mt-3 mr-2"> <input type="number" name="zip" class="form-control" required="required" min="10000" max="99999" onChange={(e)=> {setZip(e.target.value)}}/> <span>Zip code</span> </div>
                              
    
                          </div>
    
    
                          
    
                      </div>
    
                  </div>
    
              </div>
    
    
              <div class="mt-4 mb-4 d-flex justify-content-between">
    
    
                          <span></span>
    
    
                          <button type='submit' class="btn btn-success px-3">Pay ${data.total}</button>
    
    
                          
    
                      </div>
    
          </div>
          
    
          <div class="col-md-4">
    
              <div class="card card-blue p-3 text-white mb-3">
    
                 <span>You have to pay</span>
                  <div class="d-flex flex-row align-items-end mb-3">
                      <h1 class="mb-0 yellow">${data.total}</h1> <span>.00</span>
                  </div>
    
                  <span>Enjoy all the features and perk after you complete the payment</span>
                  <a href="#" class="yellow decoration">Know all the features</a>
    
                  <div class="hightlight">
    
                      <span>100% Guaranteed support and update for the next 5 years.</span>
                      
    
                  </div>
                  
              </div>
              
          </div>
          
          
      </div>
        
      </form>
                    )
                }
            })}
      </div>        
        
    );

}

export default PaymentHome;