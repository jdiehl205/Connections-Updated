import React from 'react'
import { Link } from 'react-router-dom';
const pen = require('../Images/contact.jpg');

export default function Contact() {
    return (
        <div id="contact">
            <div className="img">
                <img src={pen} alt="Contact"/>
            </div>
            <div className="sections">
                <h1>Contact Me</h1>
                <p>Contact me if you have any questions about the book or any issues you may have regarding the site.</p>
                <Link to='/contact'>
                    <button>Learn More</button>
                </Link>
            </div>
        </div>
    )
}
