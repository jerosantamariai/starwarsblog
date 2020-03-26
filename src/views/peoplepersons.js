import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const Persons = props => {
    const { store, actions } = useContext(Context);
    const { people } = store;
    const peoplename = props.match.params.vehicle;
    return (
        <>

            <div className="container">

                <div className="card-group">
                    <div className="row">
                        {
                            !!store.people ?
                                store.people.results.map((peoper, i) => {
                                    if (JSON.stringify(peoper.name) === JSON.stringify(peoplename)) {
                                        const img = peoper.name.split(" ").join("-").toLowerCase() + ".jpg";
                                        return (
                                            
                                                < div className="card text-white bg-dark col-3 mb-3" key={i}>

                                                    <img src={"img/vehicles/" + img} className="card-img-top" alt={"image of " + img} />
                                                    {/* <a classNam="text" id="overlay">GO!</a> */}

                                                    <div className="card-body col-9">
                                                        <h5 className="card-title">{peoper.name}</h5>
                                                        <p className="card-text">Model: {peoper.model}</p>
                                                        <p className="card-text">Cargo Capacity: {peoper.argo_capacity}</p>
                                                        <p className="card-text">Consumables: {peoper.consumables}</p>
                                                        <p className="card-text">Cost In Credits: {peoper.cost_in_credits}</p>
                                                        <p className="card-text">Created: {peoper.created}</p>
                                                        <p className="card-text">Crew: {peoper.crew}</p>
                                                        <p className="card-text">Edited: {peoper.edited}</p>
                                                        <p className="card-text">Length: {peoper.length}</p>
                                                        <p className="card-text">Manufacturer: {peoper.manufacturer}</p>
                                                        <p className="card-text">Maximum Atmosphering Speed: {peoper.max_atmosphering_speed}</p>
                                                        <p className="card-text">Number of Passengers: {peoper.passengers}</p>
                                                        <p className="card-text">Pilots: {peoper.pilots}</p>
                                                        <p className="card-text">Vehicle Class: {peoper.vehicle_class}</p>
                                                        <p className="card-text">Observations: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        <Link to={"/people"} className="btn btn-primary">Back to Vehicles!</Link>
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

export default Persons;