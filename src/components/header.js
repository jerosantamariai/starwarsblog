import React from 'react';
import { Link } from "react-router-dom";

const Header = props => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row" id="social">
                        <div className="col-4 col-offset-4">
                            <Link className="socialmedia" to="http://www.facebook.com/"><i className="fa fa-facebook"></i></Link>
                            <Link className="socialmedia" to="http://www.instagram.com/"><i className="fa fa-instagram"></i></Link>
                            <Link className="socialmedia" to="http://www.tumblr.com/"><i className="fa fa-tumblr"></i></Link>
                            <Link className="socialmedia" to="http://www.twitter.com/"><i className="fa fa-twitter"></i></Link>
                            <Link className="socialmedia" to="http://www.youtube.com/"><i className="fa fa-youtube"></i></Link>
                        </div>
                        <div className="col-4">
                            <img src="https://img.pngio.com/new-star-wars-characters-trilogy-in-development-star-wars-characters-png-black-and-white-810_455.jpg" alt="stlogo" />
                        </div>
                        <div className="col-4" id="search">
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-10">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" id="inputsearch" placeholder="Search Star Wars" />
                                        <div className="input-group-append">
                                            <span className="input-group-text" id="basic-addon2"><i className="fa fa-search"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6"></div>
                                <div className="col-6">
                                    <p className="userpath"><Link className="login" to="/#">LOG IN</Link>      /    /       <Link className="signup" to="/#">SIGN UP</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-fixed-top">
                    <div className="row" id="centerbar">
                        <div className="col-12 d-flex justify-content-center">
                            <nav className="nav">
                                <Link className="nav-link" to="/">HOME</Link>
                                <Link className="nav-link" to="/people">PEOPLE</Link>
                                <Link className="nav-link" to="/vehicles">VEHICLES</Link>
                                <Link className="nav-link" to="/planets">PLANETS</Link>
                                {/* <a className="nav-link" to="/#">SERIE</a>
                                <a className="nav-link" to="/#">INTERACTIVE</a>
                                <a className="nav-link" to="/#">COMMUNITY</a>
                                <a className="nav-link" to="/#">DATABANK</a> */}
                            </nav>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header;