import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>

<div className="footer-content">
   <div className="footer-content-left">
    
    <img src={assets.logo} alt="" />
    <p>We hope this message finds you well. At Softlife Foods, 
        we are dedicated to providing you with the best dining experience possible
        </p>
<div className="footer-social-icons">
            <img src={assets.facebook} alt="" />
            <img src={assets.linkedin} alt="" />
            <img src={assets.twitter} alt="" />
        </div>


   </div>

   <div className="footer-content-center">

    <h2>COMPANY</h2>
    <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
    </ul>

   </div>

   <div className="footer-content-right">

    <h2>GET IN TOUCH</h2>
    <ul>
        <li>+254-7070-70300</li>
        <li>softlife@foodsgmail.com</li>
    </ul>

   </div>
</div>
<hr />

<p className='footer-copyright'>
    Copyright 2024 @ softlife.com - All rights reserved
</p>

    </div>
  )
}

export default Footer