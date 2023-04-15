import React from 'react';
import Navbar from './Navigation';
import headerImage from '../assets/images/banner.jpg';
import '../style/Header.css';

function Header() {
    return (
        <header>
           <h1> Craig Reese</h1>
           <img src={headerImage} alt="background header picture of neon blue lights"></img>
           {/* <Navbar /> */}
        </header>
    )
}





export default Header;