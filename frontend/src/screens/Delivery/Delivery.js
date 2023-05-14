import React,{useEffect,useState} from 'react'
import { Badge, Button, Card } from "react-bootstrap";
import Footer from '../../components/Footer';
import Header from '../../components/Header/Header';
import HomeNavBar from '../../components/HomeNavBar';
import MainScreen from "../../components/MainScreen";
import './deliver.css';
import { useLocation } from 'react-router';
import axios from 'axios';


const Delivery = () => {

  const [deliveries,setDelivery] = useState([]);
  const {state} = useLocation();
  const ID = state.orderID;

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  useEffect(() =>{

    function getDelivery() {
        axios.get(`http://localhost:5000/delivery/view`).then((res) => {
  
            setDelivery(res.data);
            console.log(res.data);
        }).catch((err) => {
  
            alert(err.message);
        })
    }
  
    getDelivery();
    
  
  }, [])



  

  return (
    <>
      <Header/>

      <MainScreen tittle="Welcome back to deliver details">
          {deliveries.map((deliver) => {
            if(ID == deliver.deliverID){
              return(
                <div className="card">
                <div>
                              <blockquote className="blockquote mb-0">
                      <h4>
                        <br />
                        <Badge variant="danger">
                          {" "}
                          <p text-align="center">Process = {deliver.deliveryStatus}</p>
                        </Badge>
                      </h4>
                      <footer className="blockquote-footer">
                        <br />
                        <br />
                        <h5>Date = {date}</h5>
                        <div title="Sourse Tittle"></div>
                        <br />
                      </footer>
                    </blockquote>
                        </div>
                </div>
            )
            }
          })}
    </MainScreen>

    <Footer/>
    </>
  );
};

export default Delivery
