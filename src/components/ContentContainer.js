import React, {useState} from 'react'; // useState for page changes

import Header from './Header'; // navbar is rendered within the header component
// import Navbar from './Navigation';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
// import '../App.css';
import Footer from './Footer';

export default function ContentContainer() {
    const [currentPage, setCurrentPage] = useState('about'); // defaults to about me page

    const renderPage = () => { // renders appropriate component relative to value of 'currentPage'
        if (currentPage === 'about') { return <About />; }
        if (currentPage === 'portfolio') { return <Portfolio />; }
        if (currentPage === 'contact') { return <Contact />; }
        if (currentPage === 'resume') { return <Resume />; }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
       <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} /> 
        {/* renderPage returns component based on currentPage, uses state  */}
        <main>
        {renderPage()} 
        </main>
        <Footer />
         console.log({currentPage})
       </div>
    );
}


