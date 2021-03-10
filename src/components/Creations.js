import React from 'react'
import { Link } from 'react-router-dom';

const book = require('../Images/book_cross03.jpg');

export default function Creations() {
    return (
            <div id="creations">
                <div className="img">
                    <img src={book} alt="Book"/>
                </div>
                <div className="sections">
                    <h1>My Book</h1>
                    <p>IF you think the Bible is boring and irrelevant, this study is for you.  I have shared many interesting facts that will make you think.  As you study, I pray that God will bless you and give you new insights into HIS WORD.
                    The book is available on the Amazon, Barnes & Noble, Westbow Press websites. Click "Learn More" to see th elinks to order online. I have several cases here for local deliveries and for bulk orders. Contact me through this website for discounts on orders of 10 or more books</p>
                    <Link to="/creations">
                        <button>Learn More</button>
                    </Link>
                </div>
            </div>
    )
}
