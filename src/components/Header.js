import React from 'react';
import Navbar from './Navigation';
import headerImage from '../assets/images/banner.jpg';
import '../style/Header.css';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <header>
           <h2 className='myName'>
             <span className='delay1'>C</span>raig R<span className='delay2'>ee</span>se
            
            
            
            {/* <div class="flickering-text">
             <span>C</span><span>r</span><span>a</span><span>i</span><span>g</span>
             <span> </span>
             <span>R</span><span>e</span><span>e</span><span>s</span><span>e</span>
             </div> */}
           
           
           
           </h2>
           <img src={headerImage} alt="background header picture of neon blue lights"></img>
           <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}





