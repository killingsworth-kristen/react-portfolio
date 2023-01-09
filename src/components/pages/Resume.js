import React from 'react';

export default function Resume () {

    function downloadResume () {
        fetch('killingsworthResumeDec2022.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'killingsworthResumeDec2022.pdf';
                alink.click();
            })
        })
    }

    return (
        <div className='resume'>
            <h2>Education</h2>
            <ul className="resume-ul">
                <li className="resume-li">UNIVERSITY OF WASHINGTON CODING BOOTCAMP CERTIFICATE</li>
                <li className="resume-li">BACHELOR OF THE ARTS | DECEMBER 2020 | UNIVERSITY OF WASHINGTON</li>
            </ul>
            <h2>Work Experience</h2>
            <ul className="resume-ul">
                <li className="resume-li">Registered Behavior Technician (RBT) | AttainABA | Jan. 2022 - Aug. 2022
                    <ul className="resume-ul">
                        <li className="resume-li">Worked with autistic children (ages 3-18) to help them develop important skills (functional, social, etc.)</li>
                    </ul>
                </li>
                <li className="resume-li">English Tutor | Best in Class Education | Jan. 2019 - Mar. 2020
                    <ul className="resume-ul">
                        <li className="resume-li">Working with kids K-12 to develop reading/writing skills</li>
                    </ul>
                </li>
                <li className="resume-li"> Manager | Edible Arrangements | Jan. 2016 - Oct. 2019
                    <ul className="resume-ul">
                        <li className="resume-li">Responsible for all elements of running a business (Social media marketing, payroll/scheduling, inventory, etc.)</li>
                    </ul>
                </li>
            </ul>
            <h2>Professional Skills</h2>
            <ul className="resume-ul">
                <li className="resume-li">Managerial Experience including payroll, scheduling, inventory, hiring/firing</li>
                <li className="resume-li">Experience with Microsoft office suite and Google suite</li>
            </ul>
            <h2>Technical Skills</h2>
            <ul className="resume-ul">
                <li className="resume-li">HTML, CSS, JavaScript</li>
                <li className="resume-li">Node.js
                    <ul className="resume-ul">
                        <li className="resume-li">Express.js</li>
                        <li className='resume-li'>Bcrypt</li>
                        <li className='resume-li'>MySQL2</li>
                        <li className='resume-li'>Sequelize</li>
                        <li className='resume-li'>Mongoose</li>
                        <li className='resume-li'>Inquirer</li>
                    </ul>
                </li>
                <li className="resume-li">React, Handlebars</li>
                <li className="resume-li">SQL and Mongo</li> 
            </ul>
            <button onClick={downloadResume}>Download PDF version</button>
        </div>
    )
}