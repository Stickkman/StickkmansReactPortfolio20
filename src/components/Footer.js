import React from 'react';
import '../style/Footer.css'
import { FiGithub, FiLinkedin } from 'react-icons/fi'; // import github/linkedin icons - feather icons 


export default function Footer() {
    return ( 
        <div className='footerWrap'>
            <a className='footerIcons' target='_blank' rel='noreferrer' title='Go to Github Profile'
             href='https://github.com/Stickkman'>
             <FiGithub />       
            </a>
            <a className='footerIcons' target='_blank' rel='noreferrer' title='LinkedIn Profile Coming Soon'
            //  replace with linkedin profile when created
             href='https://github.com/Stickkman'> 
             <FiLinkedin />       
            </a>

            
       </div>
    );  
}