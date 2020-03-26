import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const Places = props => {
    const { store, actions } = useContext(Context);
    const { people } = store;
    const placename = props.match.params.places;
    return (
        <>

            <div className="container">

                <div className="card-group">
                    <div className="row">
                        {
                            !!store.planets ?
                                store.planets.results.map((plapla, i) => {
                                    if (JSON.stringify(plapla.name) === JSON.stringify(placename)) {
                                        const img = plapla.name.split(" ").join("-").toLowerCase() + ".jpg";
                                        return (
                                            <div className="row card-group text-white bg-dark mb-3 d-flex justify-content-center" key={i}>
                                                <div className="col-3 my-auto">
                                                    <img src={"/img/planets/" + img} className="card-img-top" alt={"image of " + img} />
                                                    <Link to={"/planets"} className="btn btn-secondary d-flex justify-content-center">Back to Planets!</Link>
                                                </div>
                                                <div className="col-9 py-4">
                                                    <h5 className="card-title">{plapla.name}</h5>
                                                    <p className="card-text">Climate: {plapla.climate}</p>
                                                    <p className="card-text">Created: {plapla.created}</p>
                                                    <p className="card-text">Diameter: {plapla.diameter}</p>
                                                    <p className="card-text">Edited: {plapla.edited}</p>
                                                    <p className="card-text">Gravity: {plapla.gravity}</p>
                                                    <p className="card-text">Orbital Period: {plapla.orbital_period}</p>
                                                    <p className="card-text">population: {plapla.population}</p>
                                                    <p className="card-text">Rotation Period: {plapla.rotation_period}</p>
                                                    <p className="card-text">Surface Water: {plapla.surface_water}</p>
                                                    <p className="card-text">Terrain: {plapla.terrain}</p>
                                                    <p className="card-text">Observations: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                                </div>
                                            </div>
                                        )
                                    }
                                })
                                : (
                                    <div className="text-center" id="undefined">
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

export default Places;