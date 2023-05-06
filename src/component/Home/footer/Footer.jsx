import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return <>
        <div class="clear"></div>
        <div id="footer">

            <Link to="/">Sarba Siksha Abhijan </Link>| < Link to="/">Other Agencies </Link>| <Link to="#">Home </Link> <Link to="#">PTTI </Link>| <Link to="#">Contact Us </Link>| <Link to="#">Login</Link>
            <br />&copy; Copyright WBBPE 2011. All rights reserved.
        </div>
      

  </>
}

export default Footer