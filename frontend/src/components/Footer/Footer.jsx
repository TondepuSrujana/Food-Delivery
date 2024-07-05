import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Explore delicious cuisines and order your favorite meals with ease using our food app, ensuring fast delivery and great deals right at your fingertips. </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivary</li>
                    <li>Privary Policy</li>
                </ul>
                
            </div>
            <div className="footer-content-right">
                <h2> GET IN TOUCH</h2>
                <ul>
                    <li>+91 221-333-456</li>
                    <li>contact@FoodMagic.com</li>
                </ul>

            </div>
            
        </div>
        <hr />
        <p className="footer-copy-right">Copyright 2024 FoodMagic.com-All Right Reserved</p>
        

    </div>
  )
}

export default Footer