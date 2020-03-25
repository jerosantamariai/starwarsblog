import React from 'react';

const Header = props => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row" id="social">
                        <div className="col-4 col-offset-4">
                            <a className="socialmedia" href="http://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                            <a className="socialmedia" href="http://www.instagram.com/"><i className="fa fa-instagram"></i></a>
                            <a className="socialmedia" href="http://www.tumblr.com/"><i className="fa fa-tumblr"></i></a>
                            <a className="socialmedia" href="http://www.twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="socialmedia" href="http://www.youtube.com/"><i className="fa fa-youtube"></i></a>
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
                                    <p className="userpath"><a className="login" href="/#">LOG IN</a>      /    /       <a className="signup" href="/#">SIGN UP</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-fixed-top">
                    <div className="row" id="centerbar">
                        <div className="col-12 d-flex justify-content-center">
                            <nav className="nav">
                                <a className="nav-link" href="/#">PEOPLE</a>
                                <a className="nav-link" href="/#">VEHICLES</a>
                                <a className="nav-link" href="/#">PLANETS</a>
                                {/* <a className="nav-link" href="/#">SERIE</a>
                                <a className="nav-link" href="/#">INTERACTIVE</a>
                                <a className="nav-link" href="/#">COMMUNITY</a>
                                <a className="nav-link" href="/#">DATABANK</a> */}
                            </nav>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header;