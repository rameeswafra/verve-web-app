import React from "react";
import './ContactUs.css';
import Footer from "./Footer";
import HomeNavBar from "./HomeNavBar";


const ContactUs = () => {
    return(
        <>
                <HomeNavBar/>
                <div class="container contact">
                    <div class="content">
                        <div class="left-side">
                        <div class="address details">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="topic">Address</div>
                            <div class="text-one">No 24 Galle Road</div>
                            <div class="text-two">Colombo 02</div>
                            <div class="text-two">Sri Lanka</div>
                        </div>
                        <div class="phone details">
                            <i class="fas fa-phone-alt"></i>
                            <div class="topic">Phone</div>
                            <div class="text-one">+0094 9893 5647</div>
                            <div class="text-two">+0094 3434 5678</div>
                        </div>
                        <div class="email details">
                            <i class="fas fa-envelope"></i>
                            <div class="topic">Email</div>
                            <div class="text-one">verveemarket@gmail.com</div>
                            <div class="text-two">info.verve@gmail.com</div>
                        </div>
                        </div>
                        <div class="right-side">
                        <div class="topic-text">
                            Have Any Question ?
                            <p />
                                        We'd love to hear from you!
                            <p />
                            <br/>
                        </div>

                        <div className="ig">
                            <img/>
                        </div>
                        </div>
                    </div>
                    </div>
                    <Footer/>
        </>
    );
}

export default ContactUs;