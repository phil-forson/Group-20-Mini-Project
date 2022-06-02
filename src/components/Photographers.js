import React from 'react';
import '../styles/Photographers.css';
import birthday from '../assets/birthday.jpg';
import softbox from '../assets/birthday.jpg';
import shoot from '../assets/shoot.jpg'

const Photographers = () => {
    // useEffect(() => {
    //     const scroll = new LocomotiveScroll({
    //         el: document.querySelector('.photocont'),
    //         smooth: true
    //     });
    // })
    return (
        <div className="photocont" id="photographers">
            <div className="phototxt">
                <h2>Alter Life By Holding It Still.</h2>
                <div className="subphototxt">over 30 photographers ready to accept your booking and capture your moment</div>
            </div>
            <div className="photogrid">
                <div className="photocards">
                    <div className="photocard one">
                        <div className="name">Samuel Marfo</div>
                        <img src={birthday} alt="Birthday Girl" />
                        <div className="starRatings">
                            <div className="star one">★</div>
                            <div className="star two">★</div>
                            <div className="star three">★</div>
                            <div className="star four">★</div>
                            <div className="star five">★</div>
                        </div>
                        <div className="events">
                            <div className="event">Wedding</div>
                            <div className="event">Graduation</div>
                            <div className="event">Baby</div>
                        </div>
                    </div>
                    <div className="photocard two">
                        <div className="name">Philemon Forson</div>
                        <img src={softbox} alt="Philemon Forson" />
                        <div className="starRatings">
                            <div className="starone">★</div>
                            <div className="startwo">★</div>
                            <div className="starthree">★</div>
                            <div className="starfour">★</div>
                            <div className="starfive">★</div>
                        </div>
                        <div className="events">
                            <div className="event">Wedding</div>
                            <div className="event">Baby</div>
                            <div className="event">Graduation</div>
                            <div className="event">Adult</div>
                        </div>
                    </div>
                    <div className="photocard three">
                        <div className="name">Ernest Otu</div>
                        <img src={shoot} alt="Bobby" />
                        <div className="starRatings">
                            <div className="starone">★</div>
                            <div className="startwo">★</div>
                            <div className="starthree">★</div>
                            <div className="starfour">★</div>
                            <div className="starfive">★</div>
                        </div>
                        <div className="events">
                            <div className="event">Wedding</div>
                            <div className="event">Graduation</div>
                            <div className="event">Adult</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Photographers;