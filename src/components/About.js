import React from 'react'
const debbie = require('../Images/debbie.jpg')

export default function About() {
    return (
            <div id="about">
                <div className="img">
                    <img src={debbie} alt="Debbie" />
                </div>
                <div className="sections">
                    <h1>About Me</h1>
                    <p>Debbi is a wife, a mother, a grandmother, a nurse, country cook and avid reader.  When she was young, she would escape to the woods to watch the wildlife and read.   In her teens, she played piano for various Gospel Music quartets. This love of Gospel music is still evident today in her style accompanying soloist, mixed groups, choirs and congregations. She always envied the vast book collection of Aunt Ruth.  Aunt Ruth and Uncle Gene have been a major influence in her life. She has been so blessed.  Watch for future books as she shares these blessings with you.</p>
                    {/* <p>We are Hyperspace, the #1 fastest growing company in the technology industry. Our company believes that the quality of our technology comes first and buisness second, and we make sure the people get the technology they deserve at a reasonable price they can afford. So come join Hyperspace as we propell mankind into the new age.</p> */}
                </div>
            </div>
    )
}
