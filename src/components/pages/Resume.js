import React from 'react';

export default function Resume () {
    return (
        <div className='resume'>
            <h2>Education</h2>
            <ul>
                <li>BACHELOR OF THE ARTS | DECEMBER 2020 | UNIVERSITY OF WASHINGTON</li>
                <li>UNIVERSITY OF WASHINGTON CODING BOOTCAMP CERTIFICATE</li>
            </ul>
            <h2>Work Experience</h2>
            <ul>
                <li>Registered Behavior Technician (RBT) | AttainABA | Jan. 2022 - Aug. 2022
                    <ul>
                        <li>Worked with autistic children (ages 3-18) to help them develop important skills (functional, social, etc.)</li>
                    </ul>
                </li>
                <li>English Tutor | Best in Class Education | Jan. 2019 - Mar. 2020
                    <ul>
                        <li>Working with kids K-12 to develop reading/writing skills</li>
                    </ul>
                </li>
                <li> Manager | Edible Arrangements | Jan. 2016 - Oct. 2019
                    <ul>
                        <li>Responsible for all elements of running a business (Social media marketing, payroll/scheduling, inventory, etc.)</li>
                    </ul>
                </li>
            </ul>
            <h2>Professional Skills</h2>
            <ul>
                <li>Managerial Experience including payroll, scheduling, inventory, hiring/firing</li>
                <li>Experience with Microsoft office suite and Google suite</li>
            </ul>
            <h2>Technical Skills</h2>
            <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>Node.js
                    <ul>
                        <li>Express.js</li>
                        <li>React</li>
                    </ul>
                </li>
                <li>SQL and Mongo</li> 
            </ul>
            <a href="#">Download PDF version (coming soon!)</a>
        </div>
    )
}