import React from 'react';

export default function Resume () {
    return (
        <div className='resume'>
            <h2>Education</h2>
            <ul className="resume-ul">
                <li className="resume-li">BACHELOR OF THE ARTS | DECEMBER 2020 | UNIVERSITY OF WASHINGTON</li>
                <li className="resume-li">UNIVERSITY OF WASHINGTON CODING BOOTCAMP CERTIFICATE</li>
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
                        <li className="resume-li">React</li>
                    </ul>
                </li>
                <li className="resume-li">SQL and Mongo</li> 
            </ul>
            <a href="#">Download PDF version (coming soon!)</a>
        </div>
    )
}