// import {React, useState}  from 'react';
import React  from 'react';
import logo from '../../img/Vapetasia_Logo_2_small.png'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch} from 'react-icons/ai';
import './navbar.css';


const Navbar = () => {
    // const [nav, setNav] = useState(false);
  return (
  
    <div className='navbar-container'>
      {/* <div className='site-logo'><a><img src={logo} alt="Vapetasia" /></a></div>   */}
        <nav className='nav'>
        <div className='site-logo'><a><img src={logo} alt="Vapetasia" /></a></div>      
            <a href="/" className='nav'>HOME</a>
            <a href="/flavors">FLAVORS</a>
            <a href="/disposables">DISPOSABLES</a>
            <a href="/advocacy">ADVOCACY</a>
            <a href="/blog">BLOG</a>
            <a href="/aboutus">ABOUT US</a>
            <a href="/contactus">CONTACT US</a>
            <a href="/wholesale">WHOLESALE</a>
            <a href="/storelocator">STORE LOCATOR</a>
            {/* <a href="/pact">PACT</a> */}
            <AiOutlineSearch size={25} style={{marginTop: '6px', color: 'white'}} />                   
        </nav>
    </div>  
      /* <div onClick={()=> setNav(!nav)} className="mobile-nav">

        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30}/>}

        <strong>Menu</strong> 

      </div> */
    
  )  
}

export default Navbar