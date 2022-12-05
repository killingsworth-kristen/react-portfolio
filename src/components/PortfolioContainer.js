import React, { useState } from 'react';
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Navbar from "./Navbar";
import Footer from "./Footer"

export default function PortfolioContainer () {
    const [currentPage, setCurrentPage] = useState("About Me")
    function renderPage () {
        if (currentPage === `About Me`) {
          return (<AboutMe />)
        } else if (currentPage === `Contact`) {
          return (<Contact/>)
        } else if (currentPage === `Portfolio`) {
          return (<Portfolio/>)
        } else if (currentPage === `Resume`) {
          return (<Resume/>)
        } else {
          return (<AboutMe/>)
        }
      }
      const handlePageChange = (page) => setCurrentPage(page);
      return (
        <div>
        < Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
        <Footer/>
        </div>
      )
}