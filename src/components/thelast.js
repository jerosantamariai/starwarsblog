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
                                    <h5 className="card-title">The standard Lorem Ipsum passage, used since the 1500s</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <a href="#" className="btn btn-primary">Go!</a>
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