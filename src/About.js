
import './About.css';
import React from 'react';
//import { HashLink as Link } from 'react-router-hash-link';

function About() {
    return (
        <div className="aboutcont">
            <div className="mainabcont">
                <div className="content">
                    <div className="grp1">
                        <div className="discover">Discover</div>
                        <div className="links">
                            <a href="https://en.wikipedia.org/wiki/Photography" target="_blank">What is Photography?</a>
                            <a href="https://www.merriam-webster.com/dictionary/photo%20shoot" target="_blank">What is a Photoshoot?</a>
                            <a href="https://www.howtogeek.com/63409/htg-explains-cameras-lenses-and-how-photography-works/" target="_blank">How Photography Works?</a>
                            <a href="https://www.wix.com/blog/photography/how-to-successful-photoshoot?utm_source=google&utm_medium=cpc&utm_campaign=16242175905^134377093918&experiment_id=^^582523585389^^_DSA&gclid=CjwKCAjwv-GUBhAzEiwASUMm4iF-n_2SVJI0ir9x28iVN85_r736S-he9rkRHEthAI6jAeRSvse_cxoCW1AQAvD_BwE" target="_blank">How To Prepare For A Photoshoot?</a>
                        </div>
                    </div>
                    <div className="grp2">
                        <div className="company">Company</div>
                        <div className="links">
                            <a href="mailto:photoshootbooking@gmail.com">Contact By mail</a>
                            <a href="tel:0558252616">Contact By Phone</a>
                        </div>
                    </div>
                    <div className="grp3">
                        <div className="needhlp">Need help?</div>
                        <div className="links">
                            <a href="mailto:photoshootbooking@gmail.com">Help Centre</a>
                        </div>
                        <div className="days">
                            <div className="weekdays">Mon-Fri 10am-5pm</div>
                            <div className="weekends">Sat 11am-4:30pm</div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="ccontent"><small>© DragNDrop • Lots of ♥ from Accra,Ghana</small></div>
                </div>
            </div>
        </div>
    )
}

export default About;