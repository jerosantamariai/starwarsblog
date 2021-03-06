import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const Species = props => {
    const { store, actions } = useContext(Context);
    const { species } = store;
    return (
        <>

            <div className="container">
                <div className="card-group">
                    <div className="row d-flex justify-content-center ml-5" id="row-group">
                        {
                            !!store.species ?
                                store.species.results.map((specie, i) => {
                                    const img = specie.name.replace(" ' ").split(" ").join("-").toLowerCase() + ".jpg";
                                    return (
                                        < div className="card text-white bg-dark col-3 mb-3" key={i} id="container-card">
                                            <img src={"img/species/" + img} className="card-img-top" alt={"image of " + img} />
                                            {/* <a classNam="text" id="overlay">GO!</a> */}
                                            <div className="card-body">
                                                <h5 className="card-title">{specie.name}</h5>
                                                <p className="card-text">Average Height: {specie.average_height}</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <Link to={"/species/" + specie.name} className="btn btn-secondary">Go to...></Link>
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
                <div className="row pb-5" id="moreinfo">
                    <div className="col-md-6 offset-3 d-flex justify-content-between">
                        {
                            !!store.species &&
                                store.species.previous !== null ?
                                (
                                    <button className="btn btn-dark btn-md"
                                        onClick={() => actions.getSpecies(store.species.previous)}>
                                        <i class="fa fa-arrow-left"></i> Previous
                                    </button>
                                ) : (
                                    <span className="btn btn-dark btn-md disabled">
                                        <i class="fa fa-arrow-left"></i> Previous
                                    </span>
                                )
                        }
                        {
                            !!store.species &&
                                store.species.next !== null ?
                                (
                                    <button className="btn btn-dark btn-md"
                                        onClick={() => actions.getSpecies(store.species.next)}>
                                        Next <i class="fa fa-arrow-right"></i>
                                    </button>
                                ) : (
                                    <span className="btn btn-dark btn-md disabled">
                                        Next <i class="fa fa-arrow-right"></i>
                                    </span>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Species;