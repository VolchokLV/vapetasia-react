import React from 'react';
import Warning from './Warning';
import Hero from './Hero';


const Home = () => {
  return (
    <>
<style>
   @import url("https://use.typekit.net/fde1wvh.css");
</style>
    <div className='main justify-items-center items-center w-full'>
        <div className='grid grid-row-1 justify-items-center items-center w-100% border-4 border-black mr-5 ml-5'>
            <Warning />
        </div>
        <div className='grid grid-row-1 justify-items-center items-center w-full'>
            <Hero />
        </div>
    </div>
    </>

  );
}

export default Home