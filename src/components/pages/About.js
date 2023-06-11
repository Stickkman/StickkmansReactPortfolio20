import React from 'react';

import '../../style/About.css';
import Craig from '../../assets/images/Craig.jpg'; // replace w better current pic later

// ToDo:
// - write a better paragraph in aboutText section, maybe include certs?
// - onClick backglow, other animation method on page switch
// - popup box of skills learned

export default function About() {
    return (
        <div className='pageWrapper'>
            <h1>About Me</h1>
            
            <p className='aboutText'>
            Hi there and welcome,&nbsp;&nbsp;
              <span className='delay1'>I'm Craig and I pretty much love anything related to computers/tech.  I am a recent graduate of
            the UCF Full Stack Web Development Coding Boot Camp and had a blast furthering my never ending journey 
            for knowledge.&nbsp;&nbsp;
              </span> 
              I created this site to introduce myself and showcase some of my creations.
              <span className='delay2'>&nbsp;&nbsp;This is an ongoing work in progress, but feel free to poke around and get to know me a little better.    
              </span>
            </p>       
            <img src={Craig} className='profilePic' alt='Craig profile picture'></img>
        </div>
    );
}