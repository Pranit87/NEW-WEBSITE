import {Outlet,Link} from "react-router-dom";
import React, {useState} from 'react';
import "./NavbarStyles.css"


const Layout = () => {

    return (
        <div className = "header">
            <li className = "LOGO">
            <Link  to = "/"> <h2>LOGO</h2> </Link>
            </li>
            <ul className = "nav-menu">
                <li>
                    <Link  to = "/"> <h5>Home</h5> </Link>
                </li>
                <li>
                    <Link to = "/Pricing"> <h5>Pricing</h5> </Link>
                </li>
                <li>
                    <Link to = "/About"> <h5>About</h5> </Link>
                </li>
                <li>
                    <Link to = "/Contact"> <h5>Contact</h5> </Link>
                </li>

            </ul>

            <Outlet/>

        </div>
 
        
    );
}
 
export default Layout;
