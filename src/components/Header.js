import React, { useContext } from 'react'
import { MyContext } from '../App';

export default function Header() {
    const gsap = useContext(MyContext);

    const scrollToAbout = () => {
        gsap.to(window, {duration: 1, scrollTo: '#creations'});
    };

    return (
            <div id="header">
                <h1>Connections</h1>
                <p>GENESIS-THE REVELATION-TODAY</p>
                <button onClick={scrollToAbout}>Learn More</button>
            </div>
    )
}
