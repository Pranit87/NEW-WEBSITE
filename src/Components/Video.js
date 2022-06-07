import React from 'react';
import {Link} from "react-router-dom"
import "./VideoStyles.css"
import warpdrive from "../assets/warpdrive.mp4"


const Video  = () => {
    return (
        <div className = "hero">
            <video autoPlay loop muted id="video">
                <source src ={warpdrive} type = "video/mp4"/>
            </video>
            <div className='content'>
                <h1>GALAXY TRAVEL</h1>
                <p>Book your tickets to travel galaxies</p>
                <div >
                    <Link to = "./Book-tickets" className = "btn btn-dark  ">Book Tickets</Link>
                    <Link to = "./Contact us" className = "btn btn-light ">Contact us</Link>
                </div>
            </div>
        </div>

    );
}
 
export default Video ;