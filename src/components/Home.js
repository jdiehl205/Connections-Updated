import React from 'react';
import Header from './Header';
import About from './About';
import Creations from './Creations';
import Contact from './Contact';
import Nav from './Nav';

export default function Home() {
    return (
        <>
            <Nav />
            <div className="wrapper">
                <Header  />
                <Creations />
                <About />
                <Contact />
                <footer>Website Design, Portrait, and Product Photography credit to: <a href="https://www.instagram.com/jordansphotovault/">@Jordansphotovault</a></footer>
            </div>
        </>
    )
}
