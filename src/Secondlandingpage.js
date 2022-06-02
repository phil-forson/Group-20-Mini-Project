import './Secondlandingpage.css';
import React from 'react';
import booking from './booking.jpg';
import shoot from './shoot.jpg';
import receive from './receive.jpg';




function Secondlandingpage(){

    return (
        <div className="Secondlandingpage">
            <h2 className="howtxt">How It Works</h2>
            <div className="grid-area layout-grid">
                <div className="no1">
                    <div className="circle"><h1 className="1st">1</h1></div>
                    <h2 className="book-step">Book from our site</h2>
                    <div className="subtxt">
                        <h3 className="display gray">Book from our site and get in touch with the greatest photographers in the world without hassle.</h3>
                    </div>
                </div>
                <img src={booking} alt="book online" />

                <img src={shoot} alt="shoot" />
                <div className="no2">
                    <div className="circle"><h1 className="2nd">2</h1></div>
                    <h2 className="shoot-step">Take the shoot</h2>
                    <div className="subtxt">
                        <h3 className="display gray">Your photographer is going to be there at your selected time and venue.</h3>
                    </div>
                </div>
                <div className="no3">
                    <div className="circle"><h1 className="3rd">3</h1></div>
                    <h2 className="receive-step">Receive your photos</h2>
                    <div className="subtxt">
                        <h3 className="display gray">Photos will be enhanced by our professional editors and will be distributed to you within 24 hours. How ‘bout that!</h3>
                    </div>
                </div>
                <img src={receive} alt="receive" />
            </div>
        </div>
    )
}

export default Secondlandingpage;