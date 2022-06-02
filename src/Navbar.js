import './Navbar.css';
import React from 'react';
// import { HashLink as Link } from "react-router-hash-link";
import {useState, useEffect} from 'react';
import {links} from './Data';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);

    const showMobileMenu = () => setClick(false);

    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href');
        const location = document.querySelector(target).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 64
        })
    }
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true)
        }
        else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)



    return (
        <header className={navbar ? 'active': 'deactive'}>
            <div className="hdtext">
                <p><a href="#FirstLandingPage" key={3} onClick={handleClick}>dNd Boys</a></p>
            </div>
            <nav>
                <ul class="nav-links">
                    {/* <li><Link to="#photographers" style={styledLink} smooth>Photographers</Link></li>
                    <li><Link to="#packages" style={styledLink} smooth>Packages</Link></li> */}
                    {links.map((link) => {
                        return <li><a href={link.url} key={link.id}  onClick={handleClick}>{link.text}</a></li>
                    })}
                </ul>
            </nav>
            <a class="bookbtn" href="https://dragndrop.setmore.com/" target="_blank "><button>Book Now</button></a>
        </header>
    )
}

export default Navbar;