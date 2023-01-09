import React from 'react';

export default function Navbar ({currentPage, handlePageChange}) {
    
    return (
        <div className='header'>
        <h1 style={{margin: `3%`, padding: `2%`}}>Kristen Killingsworth</h1>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a href='#Portfolio' className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}onClick={()=>handlePageChange("Portfolio")}>Portfolio</a>
            </li>
            <li className="nav-item">
                <a href='#AboutMe' className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}onClick={()=>handlePageChange("About Me")}>About Me</a>
            </li>
            <li className="nav-item">
                <a href='#Resume' className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} onClick={()=>handlePageChange("Resume") }>Resume</a>
            </li>
            <li className="nav-item">
                <a href='#Contact' className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} onClick={()=>handlePageChange("Contact")}>Contact</a>
            </li>
        </ul>
        </div>
        )
}