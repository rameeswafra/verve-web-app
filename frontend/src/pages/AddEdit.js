import React,{useState,useEffect,useCallback} from "react";
import axios from "axios";
import "./AddEdit.css"
import OrderHeader from "../components/OrderHeader";
import { useSelector } from "react-redux";
import HomeNavBar from "../components/HomeNavBar";
import { useNavigate } from "react-router";


export default function AddEdit(){

    const {cart} = useSelector(state => state.cart);

    const navigate = useNavigate();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const [address,setAddress] = useState("")
    const [contactNO,setContact] = useState("")
    const [area,setArea] = useState("")
    const [ship,setShip] = useState("")
    const [total,setTotal] = useState("")
    const [price,setPrice] = useState("")
    const cartItems = [...cart];
    const items = [];
    const nItems = [];


    const name = userInfo?.name
    


    const getShip = () => {
            if(area == "India"){
                setShip(10)
                setTotal(parseInt(price)+parseInt(ship))
            }
            else if(area == "Maldives"){
                setShip(15)
                setTotal(parseInt(price)+parseInt(ship))
            }
            else if(area == "Singapore"){
                setShip(20)
                setTotal(parseInt(price)+parseInt(ship))
            }
            else if(area == "Thailand"){
                setShip(25)
                setTotal(parseInt(price)+parseInt(ship))
            }
            else if(area == "Dubai"){
                setShip(30)
                setTotal(parseInt(price)+parseInt(ship))
            }
            else if(area == "Portugal"){
                setShip(35)
                setTotal(parseInt(price)+parseInt(ship))
            }
            else if(area == "Italy"){
                setShip(40)
                setTotal(parseInt(price)+parseInt(ship))
            }
            else if(area == "United Kingdom"){
                setShip(45)
                setTotal(parseInt(price)+parseInt(ship))
            }
            else if(area == "China"){
                setShip(50)
                setTotal(parseInt(price)+parseInt(ship))
            }
            else{
                setTotal(price)
            }
        
      }

    
      useEffect(() => {
        getShip();
      }, [getShip])


      useEffect(() => {
        function setLength(){
          var tot = 0;
  
          for(var i=0; i<cart.length;i++){
            if(userInfo?.name == cart[i].userName){
              tot = tot + cart[i].price
            }
          }
          setPrice(tot)
        }
  
        setLength();
  
      }, [userInfo]);


    const addOrder = (e)=> {

        e.preventDefault();
        
        var j=0;

        for(var i=0; i<cartItems.length; i++){
            if(userInfo?.name == cartItems[i].userName){
                items[j] = cartItems[i].productName
                nItems[j] = cartItems[i].count
                j = j+1
            }
        }

        const newOrder = {
            items,
            nItems,
            name,
            address,
            contactNO,
            area,
            total
        }

        axios.post('http://localhost:5000/order/add', newOrder).then(()=> {
            window.location.href = "/view-order"
        }).catch((err)=> {
            console.log(err)
        })
    }
    
    

    return(
       
        <div>
            <HomeNavBar/>

            <br/>


            <div className="container">

                <form onSubmit={addOrder} className="form" method="post">
                    <div >

                    <table >
                        <thead>
                            <tr>

                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(product => {
                                if(userInfo?.name == product.userName){
                                    return(
                                        <tr key={product._id}>
                                    <th scope="row">
                                        <img
                                        style={{maxWidth: '110px',
                                        }}  
                                        className="img-fluid w=100 img-thumbnail"
                                        src={"http://localhost:5000/uploads/" + product.image}
                                        alt=""
                                        />

                                    </th>
                                    <td>{product.productName}</td>
                                    <td>{product.price.toLocaleString(
                                    'en-US',
                                    {
                                    style: 'currency',
                                    currency: 'USD',
                                    }
                                    )}
                                    </td>
                                    <td>{product.count} Item</td>
                                </tr>
                                    )
                                }
                            })}
                            <br/>


                        </tbody>
                        </table>
                        <br/><br/>
                    </div>

                    
                

                    <div className="col-md-7 element">
                        <label for="inserProduct" className="form-label">Address</label>
                        <input type="text" name="address" className="form-control" id="inserProduct" placeholder="Enter address" required
                          onChange={(e) =>{setAddress(e.target.value)}}  />
                    </div>

                    <br />

                    <div className="col-md-5 element">
                        
                        <label for="inputQuant" className="form-label">Contact Number</label>
                        <input name="contactNO" type="text" className="form-control" id="inputQuant" placeholder="Enter contact number" pattern="[0]{1}[0-9]{9}"
                          onChange={(e) =>{setContact(e.target.value)}}    />
                    </div>

                   
                    <br/>

                    <div className="col-md-7 element">
                        <label className="form-label" for="categorySelect">Shipping Area</label>
                        <select name="area" className="form-select" id="categorySelect"
                           onChange={(e) =>{setArea(e.target.value)}}   >
                            <option>Choose Shipping Area...</option>
                            <option>India</option>
                            <option>Maldives</option>
                            <option>Singapore</option>
                            <option>Thailand</option>
                            <option>Dubai</option>
                            <option>Portugal</option>
                            <option>Italy</option>
                            <option>United Kingdom</option>
                            <option>China</option>
                        </select>
                    </div>
                    <br></br>
                    <div className="total">Total: ${total}.00</div>

                   <br></br>
                   

                    <button type="submit" position = "center"className="btn btn-primary Addbtn">Add Order</button>

                </form>
            </div>
        </div>
           

        
    )
}