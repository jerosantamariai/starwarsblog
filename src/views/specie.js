import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const Film = props => {
    const { store, actions } = useContext(Context);
    const { species } = store;
    const raze = props.match.params.razes;
    return (
        <>

            <div className="container">

                <div className="card-group">
                    <div className="row">
                        {
                            !!store.species ?
                                store.species.results.map((specie, i) => {
                                    if (JSON.stringify(specie.name) === JSON.stringify(raze)) {
                                        const img = specie.name.replace(" ' ").split(" ").join("-").toLowerCase() + ".jpg";
                                        return (
                                            <div className="row card-group text-white bg-dark mb-3 d-flex justify-content-center" key={i}>
                                                <div className="col-3 my-auto">
                                                    <img src={"/img/species/" + img} className="card-img-top" alt={"image of " + img} />
                                                    <Link to={"/species"} className="btn btn-secondary d-flex justify-content-center">Back to Species!</Link>
                                                </div>
                                                <div className="col-9 py-4">
                                                    <h5 className="card-title">{specie.name}</h5>
                                                    <p className="card-text">Average Lifespan: {specie.average_lifespan}</p>
                                                    <p className="card-text">Classification: {specie.classification}</p>
                                                    <p className="card-text">Designation: {specie.designation}</p>
                                                    <p className="card-text">Eye Colors: {specie.eye_colors}</p>
                                                    <p className="card-text">Hair Colors: {specie.hair_colors}</p>
                                                    <p className="card-text">Language: {specie.language}</p>
                                                    <p className="card-text">Skin Colors: {specie.skin_colors}</p>
                                                    <p className="card-text">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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

export default Film;