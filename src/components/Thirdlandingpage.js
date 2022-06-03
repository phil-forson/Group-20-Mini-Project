import '../styles/Thirdlandingpage.css';
import React from 'react';

const Thirdlandingpage = () => {
    return (
        <div className="Thirdlandingpage" id="packages">
            <h3 className="packagestxt">we got you <span className="covered">covered!</span></h3>
            <div className="maincards">
                <div className="card1">
                    <div className="adult">adult photoshoot</div>
                        <div className="cat n1">10 photos for $550</div>
                </div>
                <div className="card2">
                    <h2 className="baby">Baby Photoshoot</h2>
                        <div className="cat n2">10 photos for $375</div>

                </div>
                <div className="card3">
                    <h2 className="fam">Family Photoshoot</h2>
                        <div className="cat n3">10 photos for $750</div>

                </div>

                <div className="card4">
                    <h2 className="wed">wedding Photoshoot</h2>
                        <div className="cat n4">10 photos for $650</div>
                </div>
            </div>
        </div>
    )
}

export default Thirdlandingpage;