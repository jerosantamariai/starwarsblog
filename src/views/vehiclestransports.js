import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const Transports = props => {
    const { store, actions } = useContext(Context);
    const { vehicles } = store;
    const vehiclename = props.match.params.vehicle;
    return (
        <>

            <div className="container">

                <div className="card-group">
                    <div className="row">
                        {
                            !!store.vehicles ?
                                store.vehicles.results.map((vehitrans, i) => {
                                    if (JSON.stringify(vehitrans.name) === JSON.stringify(vehiclename)) {
                                        const img = vehitrans.name.split(" ").join("-").toLowerCase() + ".jpg";
                                        return (
                                            <div className="row card-group text-white bg-dark mb-3 d-flex justify-content-center" key={i}>
                                                <div className="col-3 my-auto">
                                                    <img src={"/img/vehicles/" + img} className="card-img-top" alt={"image of " + img} />
                                                    <Link to={"/vehicles"} className="btn btn-secondary d-flex justify-content-center">Back to Vehicles!</Link>
                                                </div>
                                                <div className="col-9 py-4">
                                                    <h5 className="card-title">{vehitrans.name}</h5>
                                                    <p className="card-text">Model: {vehitrans.model}</p>
                                                    <p className="card-text">Cargo Capacity: {vehitrans.argo_capacity}</p>
                                                    <p className="card-text">Consumables: {vehitrans.consumables}</p>
                                                    <p className="card-text">Cost In Credits: {vehitrans.cost_in_credits}</p>
                                                    <p className="card-text">Created: {vehitrans.created}</p>
                                                    <p className="card-text">Crew: {vehitrans.crew}</p>
                                                    <p className="card-text">Edited: {vehitrans.edited}</p>
                                                    <p className="card-text">Length: {vehitrans.length}</p>
                                                    <p className="card-text">Manufacturer: {vehitrans.manufacturer}</p>
                                                    <p className="card-text">Maximum Atmosphering Speed: {vehitrans.max_atmosphering_speed}</p>
                                                    <p className="card-text">Number of Passengers: {vehitrans.passengers}</p>
                                                    <p className="card-text">Pilots: {vehitrans.pilots}</p>
                                                    <p className="card-text">Vehicle Class: {vehitrans.vehicle_class}</p>
                                                    <p className="card-text text-justify">Observations: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

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

export default Transports;