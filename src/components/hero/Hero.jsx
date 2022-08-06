import React, { useState, useEffect} from 'react';
import styles from './hero.css';
import { Parallax, Background  } from 'react-parallax';
import heroImg from '../../img/hero/Home-1.jpg'
import gash from '../../img/hero/gash.png'
// style={ {trasform: 'translateY(${ offsetY * 0.5}px)'}}>




const Hero = () => {
    
  return (
    
    <div className={styles.container}>
      <section className={styles.hero}>
      <Parallax 
          blur={2} 
          bgImage={heroImg}
          bgImageAlt="Home Hero"
          strength={300}
      >
        
        <div style={{ height: '600px' }} />
    </Parallax>
    <div className='gash'>
      <img src={gash}></img>
    </div>
        
      </section>

    </div>

  )
}

export default Hero