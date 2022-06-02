import React from 'react'
import './Customcursor.css'


const Customcursor = () => {
    const cursorRef = React.useRef(null);

    React.useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            const {clientX, clientY} = event;
            const mouseX = clientX;
            const mouseY = clientY;
            cursorRef.current.style.transform  = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        })
    }, [])
    return (
        <div className="app-cursor" ref={cursorRef} />
    )
}

export default Customcursor;