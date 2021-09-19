import React,{useState} from 'react';
import { 
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare 
} from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from 'react-router-dom';

import './navbar.css';
const Navbar = () => {

    const [showMediaIcons,setShowMediaIcons]=useState(false);
    return (
        <>
            <nav className="main-nav">
               {/* 1st logo part  */}
               <div className="logo">
                   <h2>
                       <span>A</span>yush
                       <span>T</span>echnical
                   </h2>
               </div>
               {/* 2nd menu part */}
               <div className={showMediaIcons ? "menu-link mobile-menu-link" :"menu-link"}>
                  <ul>
                      <li>
                          <NavLink to="/" >Home</NavLink>
                      </li>
                      <li>
                          <NavLink to="/about">About</NavLink>
                      </li>
                      <li>
                          <NavLink to="/service">Services</NavLink>
                      </li>
                      <li>
                          <NavLink to="/contact">Contact</NavLink>
                      </li>
                  </ul>
               </div>
               {/* 3rd social media links */}
               <div className="social-media">
                    <ul className="social-media-desktop">
                       <li>
                           <a href="https://www.facebook.com/ayushkumar.ayushkumar.3538/" target="_blank">
                             <FaFacebookSquare className="facebook"/>
                           </a>
                       </li>
                       <li>
                           <a href="https://www.instagram.com/kumarayush7767/" target="_blank">
                             <FaInstagramSquare className="instagram"/>
                           </a>
                       </li>
                       <li>
                           <a href="#" target="_blank">
                             <FaYoutubeSquare className="youtube"/>
                           </a>
                       </li>
                    </ul>

                    {/* hamburger menu start */}
                    <div className="hamburger-menu">
                       <NavLink to="#" onClick={()=> setShowMediaIcons(!showMediaIcons)}>
                           <GiHamburgerMenu/>
                       </NavLink>
                    </div>
               </div>
            </nav>
            {/* hero section */}
            {/* <section className="hero-section">
                   <p>Welcome to</p>
                   <h1>Ayush Technical</h1> 
               </section> */}
        </>
    )
}

export default Navbar;
