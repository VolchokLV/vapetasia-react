import React, { useState, useEffect} from 'react';
import './index.css'
import { Parallax, Background  } from 'react-parallax';
// style={ {trasform: 'translateY(${ offsetY * 0.5}px)'}}>



const Hero = () => {
    
  return (
    
    <div className='hero-container'>
      <section className='hero'>
      <Parallax 
          blur={2} 
          bgImage="https://vapetasia-wp.s3.us-west-2.amazonaws.com/wp-content/uploads/2020/08/11235922/Home-1.jpg"
          bgImageAlt="Home Hero"
          strength={300}
      >
        
        <div style={{ height: '600px' }} />
    </Parallax>
    <div className='gash'>
      <img src='https://vapetasia-wp.s3.us-west-2.amazonaws.com/wp-content/uploads/2020/05/11154307/IMGS-NEW-1.png'></img>
    </div>
        
      </section>

    </div>

  )
}

export default Hero