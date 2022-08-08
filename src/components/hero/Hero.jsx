import React, { useState, useEffect} from 'react';
import './hero.css';
import { Parallax, Background  } from 'react-parallax';
import heroImg from '../../img/hero/Home-1.jpg'
import gash from '../../img/hero/gash.png'
// style={ {trasform: 'translateY(${ offsetY * 0.5}px)'}}>




const Hero = () => {
    
  return (
    
    <div className="container">
      <section className="hero">
        <Parallax blur={1} bgImage={heroImg} bgImageAlt="Home Hero" strength={100}>
          <div style={{ height: '600px' }} />
          <div className='gash'>
            <img src={gash}></img>
          </div>
          <p className='hero-text'>We invest our energy and commitment to produce delicious, flavorful alternatives to combustible cigarettes.</p>     
        </Parallax>
   
      </section>
    </div>

  )
}

export default Hero