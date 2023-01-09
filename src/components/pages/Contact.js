import React from 'react';

export default function Contact () {
    return (
        <div className='contact'>
        <p>I am open to any job opportunities and can be reached through any of these methods.</p>
        <ul className='contact-ul'>
            <li className='contact-li'>
                LinkedIn: <a href='https://www.linkedin.com/in/kristen-killingsworth/' target="_blank">Kristen Killingsworth</a>
            </li>
            <li className='contact-li'>
                Github: <a href='https://www.github.com/killingsworth-kristen/' target="_blank">killingsworth-kristen</a>
            </li>
            <li className='contact-li'>
                Email: <a href='mailto: killingsworth_kristen@yahoo.com' target="_blank">killingsworth_kristen@yahoo.com</a>
            </li>
            <li className='contact-li'>
                If you would like to reach me by phone, please email me and request a call. 
            </li>
        </ul>
    </div>);
};