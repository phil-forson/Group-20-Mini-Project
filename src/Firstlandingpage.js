import './Firstlandingpage.css';
import React from 'react';
import { gsap } from 'gsap';
import { useState, useRef, useEffect } from 'react';
import lightingreflector from './lightingreflector.png';
import softboxonstand from './softboxonstand.png'
import leftsoftbox from './leftsoftbox.png'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Firstlandingpage() {
    const [fade, setFade] = useState(false)

    const hideScroll = () => {
        if (window.scrollY >= 85){
            setFade(true)
        }
        else {
            setFade(false)
        }
    }

    window.addEventListener('scroll', hideScroll)

    const momentRef = useRef();
    const image1Ref = useRef();
    const image2Ref = useRef();
    const image3Ref = useRef();
    const captureRef = useRef();
    const scrollRef = useRef();

    useEffect(() => {
        gsap.fromTo(momentRef.current, {
            opacity: 0,
        },
        {
            opacity: 1,
            delay: 2
        })
        gsap.fromTo(image1Ref.current, {
            opacity: 0
        },
        
        {
            opacity: 1, 
            delay: 2.3
        })
        gsap.fromTo(image2Ref.current, {
            opacity: 0
        },
        {
            opacity: 1, 
            delay: 2.9
        })
        gsap.fromTo(scrollRef.current, {
            opacity: 0
        },
        {
            opacity: 1, 
            delay: 2.9
        })
        gsap.fromTo(image3Ref.current, {
            opacity: 0
        },
        {
            opacity: 1, 
            delay: 2.6
        })
        gsap.fromTo(captureRef.current, {
            opacity: 0
        },
        {
            opacity: 1, 
            delay: 0.5
        })
    }, [])
    return (
        <div className="Firstlandingpage" id="FirstLandingPage">
                <div className="image1" ref={image1Ref}><img src={lightingreflector} alt="camera on a stand" /></div>
                <div className="image2" ref={image2Ref}><img src={softboxonstand} alt="softbox" /></div>
                <div className="image3" ref={image3Ref}><img src={leftsoftbox} alt="softbox on the left" /></div>
                <div className="maintxt">
                    <span className="fsttxt" ref={captureRef}>capture every </span><span className="momenttxt" ref={momentRef}>moment.</span>
                </div>
                <div className={fade ? 'scroll active' : 'scroll'} ref={scrollRef}>
                    <span>SCROLL</span>

                    <svg viewBox="0 0 24 24">
                        <line class="st1" x1="12" y1="1" x2="12" y2="22.5" />
                        <line class="st1" x1="12.1" y1="22.4" x2="18.9" y2="15.6" />
                        <line class="st1" x1="11.9" y1="22.4" x2="5.1" y2="15.6" />
                    </svg>

                </div>
        </div>
    )
}

export default Firstlandingpage;