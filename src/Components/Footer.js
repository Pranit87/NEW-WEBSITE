import React from 'react';
import "./FooterStyles.css"
import {FaAirbnb, FaFacebook,FaInstagram,FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, Fatwitter} from "react-icons/fa"


const Footer = () => {
    return (
        <div className = "footer">
            <div className = "footer-container">
                <div className = "left">
                    <div className = "location">
                        <FaSearchLocation> size = {20} style = {{colors: "#ffffff", marginRight: "2rem"}} ADDRESS </FaSearchLocation>
                            <div>
                                <p>89th street mountain road houston</p>
                                <h4>bd mountain rd</h4>
                            </div>
                        <div/>            
                        <div className='email'>
                                <h4><FaMailBulk size = {20} style = {{color: "#fffff", marginRight: "2rem"}}/> spacetravel@gmail.com </h4>
                            </div>
                        <div className='phone'>
                            <h4><FaPhone size = {20} style = {{color: "#fffff", marginRight: "2rem"}}/> 815484475 </h4>
                        </div>
                    </div>   
                </div>
                <div className = "left">
                    <div className = "social">
                        <h1>About the company</h1>
                        <p>We are the first company to provide the civilain inter-galaxy travel</p>
                        <FaFacebook size = {20} style = {{colors: "#ffffff", marginRight: "2rem"}}/>
                        <FaInstagram size = {20} style = {{colors: "#ffffff", marginRight: "2rem"}}/>
                        <FaLinkedin size = {20} style = {{colors: "#ffffff", marginRight: "2rem"}}/>
                        
                    </div>   
                </div>
            </div> 
        </div>
    );
}
 
export default Footer;