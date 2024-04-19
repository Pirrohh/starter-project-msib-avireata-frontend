import React from 'react';
// import heroimage from './assets/profile2.jpg';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[1200px] mx-auto py-8 bg-black'>
      <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
        
      
      <div className="absolute rounded-full border-t-4 border-violet-500 border-b-4 border-l-4 border-r-0 w-80 h-80 animate-spin"></div>
      <div className="absolute rounded-full border-t-4 border-pink-500 border-b-4 border-l-4 border-r-0 w-80 h-80 animate-spin"></div>
    
        <img src='/assets/images/profile2.jpg' alt="hero" className="w-80 h-80 rounded-full" />
      </div>

      <div className='cols-span-2 flex px-5 my-auto'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
          <span className='primary-color'>
            I'm a
          </span><br/>
          <TypeAnimation
            sequence={[
              "Your",
              1000,
              "Future",
              1000,
              "Wife",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          /><br/>
          <p className='text-white sm:text-lg my-6 lg:textxl'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
         </p> 
        </h1> <br/>

        {/* */}
        
      </div>
    </div>
  );
}

export default Hero;
