import React from 'react';
import { Link } from "react-router-dom";

const Footer = props => {
    return (
        <>
            <div className="footer-container d-flex justify-content-center">
                <div className="row">

                    <div ClassName="card bg-dark text-white">
                        <img ClassName="card-img" src="https://vignette.wikia.nocookie.net/es.starwars/images/6/65/Battle_of_Endor.png/revision/latest?cb=20161009040624" alt="battleofendor" />
                        <div ClassName="card-img-overlay">
                            <h5 ClassName="card-title">Card title</h5>
                            <p ClassName="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p ClassName="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer;