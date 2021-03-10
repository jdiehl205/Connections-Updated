import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../App';
import '../Css/CreationsStyle.css';
const amazon = require('../Images/amazon.jpg');
const barnes = require('../Images/barnes.jpg');
const westbow = require('../Images/wetbow.jpg');

export default function CreationsPage() {
    const gsap = useContext(MyContext);

    return (
        <div id="creation">
            <header id="navbar">
                <nav>
                <h1>Connections</h1>
                    <ul>
                        <Link to="/">
                            <li className="unselected">Home</li>
                        </Link>
                        <Link to="/creations">
                            <li className="selected">Book</li>
                        </Link>
                        <Link to="/contact">
                            <li className="unselected">Contact</li>
                        </Link>
                    </ul>
                </nav>
            </header>
            <div id="info">
                <p>Click any of the links below to buy my book!</p>
            </div>
            <div id="images">
                <div>
                    <img src={amazon} alt="Amazon" className="img1"/>
                    <h4><a href="https://rb.gy/crg238">www.Amazon.com</a></h4>
                </div>
                <div>
                    <img src={barnes} alt="Barnes & Noble" className="img2"/>
                    <h4><a href="https://rb.gy/jnhrgq">www.Barnes&Noble.com</a></h4>
                </div>
                <div>
                    <img src={westbow} alt="WestBow Press" className="img3"/>
                    <h4><a href="https://rb.gy/2twtzn">www.WestBowPress.com</a></h4>
                </div>
            </div>
        </div>
    )
}
