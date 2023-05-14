import React,{useState,useEffect} from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainScreen from '../../components/MainScreen';
import notes, {} from "../../data/notes";
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router';

const MyOrders = () => {
//for fetching order list to initialy needs to login detail after that push to
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [search, setSearch] = useState("");
  console.log(search);

  const [orders,setOrders] = useState([]);
  const navigate = useNavigate()


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

 
  return (
    <>
      <Header setSearch={setSearch} />
    <MainScreen tittle={`Welcome Back ${userInfo?.name} ......`}>
      <Link to="/add-order">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Place An Order
          <br />
        </Button>
      </Link>

      {orders
        ?.filter((order) =>
          order.orderID.toLowerCase().includes(search.toLowerCase())
        )
        .map((order) => {
          if(userInfo?.name == order.name){
            var i = 0;
              return(
                <Card style={{ margin: 10 }} key={order._id}>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    {order.orderID}
                  </span>
    
                  <div>
              
                      <Button style={{ marginLeft: 15, marginBottom: 6 }} size="lg" onClick={() => { navigate(`/delivery/${order._id}`, { state: { ...order } }) }}>
                        Delivery Details
                        <br />
                      </Button>
                
                  </div>
                </Card.Header>
    
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    
                  <div>
                  <table>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                       
                        <tr> 
                        
                          <td>
                            {order.items.map((item,index) => {
                              
                                return(
                                  <div key={index}>{item}</div>
                                )
                                
                              
                            })}
                          </td>
                          <td>
                            {order.nItems.map((nItem,index) => {
                              
                                return(
                                  <div key={index}>{nItem}</div>
                                )
                                
                              
                            })}
                          </td>  
                          
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                    
                    <footer className="blockquote-footer">
                      <br /><br/>
                      <div>Total Amount = ${order.total}</div>
                      <div title="Sourse Tittle"></div>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
              )
          }
        })}
    </MainScreen>

    <Footer/>
    </>
  );
};
export default MyOrders;
