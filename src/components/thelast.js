import React from 'react';

const TheLast = props => {
    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-12">
                    <div className="card bg-dark m-5 text-justify">
                        <div className="card-header">
                            <ul className="nav nav-pills card-header-pills">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Active</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-3 my-3">
                                <img src="http://placehold.it/300x400"></img>
                            </div>
                            <div className="col-9">
                                <div className="card-body text-secondary">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TheLast;