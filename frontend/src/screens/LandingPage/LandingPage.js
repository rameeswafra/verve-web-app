import React from 'react'
import { Button, Container, Row } from "react-bootstrap";
import "./Landing.css";
import { useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header/Header';
import HomeNavBar from '../../components/HomeNavBar';

const LandingPage = ({history}) => {
useEffect(() => {
 
  const userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    //history.push("/myorders");
  }
}, [history]);



  return (
    <>
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Verve </h1>
              <p className="subtitle">
                One Safe place for all your investment.
              </p>
            </div>



            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button size="lg" className="landingbutton"
                 


                >
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
    <Footer/>
    </>
  );
};



export default LandingPage
