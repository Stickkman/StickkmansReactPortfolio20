import React from 'react';
import Navbar from './Navigation';
import headerImage from '../assets/images/banner.jpg';
import '../style/Header.css';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <header>
           <h1> Craig Reese</h1>
           <img src={headerImage} alt="background header picture of neon blue lights"></img>
           <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}





