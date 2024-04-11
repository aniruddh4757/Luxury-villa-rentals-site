import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  return (
    <footer className={isHomePage ? 'homePage_footer otherPage_footer' : 'otherPage_footer'}>
      <div className="container">
        <h4>LUXURY RENTALS</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, exercitationem quod. Qui aperiam unde rem, quasi maiores animi dolorum dolor!</p>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/tnc'}>Terms and Conditions</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="container">
        <h4>Connect with us</h4>
        <p>+092 666 424</p>
        <p>rentals@hotmail.com</p>
        <p>All rights reserved by owner!</p>
      </div>
    </footer>
  )
}


export default Footer;