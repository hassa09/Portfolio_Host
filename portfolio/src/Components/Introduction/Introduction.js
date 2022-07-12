import { GitHub, LinkedIn, Twitter } from '@material-ui/icons';

import React from 'react';

// import Navbar from '../Navbar/navbar';
import './Introduction.scss';

function Introduction() {
    return (
      <div main className='about'>
            <div className='aboutContainer'>
                <div mainCotent>
                    <div className='text'>
                      <p>HI, my name is</p>
                      <h1>'your name here.'</h1>
                      <h2>i design & develope things.</h2>
                      <p> i am full stack developer & Cyber security analyst. i've just completed the prestigious School of code,looking to enter the world of software developement.</p>

              <button className='getInT'>get in touch </button>
              <div className='icons'>
                  <GitHub className='icon' />
                  <LinkedIn className='icon'  />
                  <Twitter className='icon' />
                  
             </div>
              </div>
              
            </div>
          
        </div>
      </div>
  )
}

export default Introduction