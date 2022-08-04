import React from 'react'
import logo from './img/Vapetasia_Logo_2_small.png';
import { AiOutlineSearch } from 'react-icons/ai' 

const Navbar = () => {
  return <nav className="nav">
    <div className='site-logo'>
      <a><img src={logo} alt="Vapetasia" /></a>
    </div>
    <div className='navbar-container'>
        <div className='nav'>
          <div className=''>
            <a href="/home" className='active'>HOME</a>
            <a href="/flavors">FLAVORS</a>
            <a href="/disposables">DISPOSABLES</a>
            <a href="/advocacy">ADVOCACY</a>
            <a href="/blog">BLOG</a>
            <a href="/aboutus">ABOUT US</a>
            <a href="/contactus">CONTACT US</a>
            <a href="/wholesale">WHOLESALE</a>
            <a href="/storelocator">STORE LOCATOR</a>
            <a href="/pact">PACT</a>
            <AiOutlineSearch size={25} style={{marginTop: '6px', color: 'white'}} />
          </div>
        </div>
      </div>
  </nav>
}

export default Navbar