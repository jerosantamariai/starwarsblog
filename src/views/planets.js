import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const Planets = props => {
    const { store, actions } = useContext(Context);
    const { planets } = store;
    return (
        <>
            <div className="container">
                <div class="card-group">
                    <div className="row">
                        {
                            !!store.planets ?
                                store.planets.results.map((star, i) => {
                                    const img = star.name.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (
                                        < div className="card text-white bg-dark col-3 mb-3" id="cardoverlay" key={i}>
                                            <img src={"img/planets/" + img} className="card-img-top" alt={"image of " + img} />
                                            {/* <a classNam="text" id="overlay">GO!</a> */}
                                            <div className="card-body">
                                                <h5 className="card-title">{star.name}</h5>
                                                <p className="card-text">Climate: {star.climate}</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <Link to={"/planets/" + star.name} className="btn btn-secondary">Go to...></Link>
                                            </div>
                                        </div>
                                    )
                                })
                                : (
                                    <div class="text-center" id="undefined">
                                        <div className="spinner-grow text-light" role="status">
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Planets;