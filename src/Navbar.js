import React from "react";
import LOGO from './download (2).png';
const Navbar=()=>{
    return(
    <div className="nav">
        <div className="logo"><img src={LOGO} height="70px"/></div>
    <ul>
    <div className="nav-elem">
    
        <li><a href="#"><b>Home</b></a></li>
        <li><a href="#" id="underline"><b>How we help</b></a></li>
        <li><a href="#"><b>Programs</b></a></li>
        <li><a href="#"><b>FAQs</b></a></li>
        <li><button>Get in Touch</button></li>
    </div>
    </ul>
    </div>
    )
};
export default Navbar; 