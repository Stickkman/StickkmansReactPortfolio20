import React from 'react';
import '../style/Navbar.css';

export default function Navbar({currentPage, handlePageChange}) {
    return (
       
        <nav>
            <ul>
                <li><a href='#about' onClick={() => handlePageChange('about')}
                className={(currentPage === 'about') ? 'navActive' : 'navInactive'}
                >About Me</a></li>

                <li><a href='#portfolio' onClick={() => handlePageChange('portfolio')}
                className={(currentPage === 'portfolio') ? 'navActive' : 'navInactive'}
                >Portfolio</a></li>

                <li><a href='#resume' onClick={() => handlePageChange('resume')}
                className={(currentPage === 'resume') ? 'navActive' : 'navInactive'}
                >Resume</a></li>

                <li><a href='#contact' onClick={() => handlePageChange('contact')}
                className={(currentPage === 'contact') ? 'navActive' : 'navInactive'}
                >Contact Me</a></li>






            {/* <li>
                <a href='/porfolio'>Portfolio</a>
            </li>    
            <li>
                <a href='/contact'>Contact</a>
            </li>
            <li>
                <a href='/resume'>Resume</a>
            </li> */}
        </ul>

    </nav>
        
    )
}



