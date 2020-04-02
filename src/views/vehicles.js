import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const Vehicles = props => {
    const { store, actions } = useContext(Context);
    const { vehicles } = store;
    return (
        <>

            <div className="container">

                <div class="card-group">
                    <div className="row d-flex justify-content-center ml-5">
                        {
                            !!store.vehicles ?
                                store.vehicles.results.map((transport, i) => {
                                    const img = transport.name.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (
                                        <>
                                            <div className="card text-white bg-dark col-3 mb-3" key={i}>

                                                <img src={"img/vehicles/" + img} className="card-img-top" alt={"image of " + img} />
                                                {/* <div class="card-img-overlay">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p class="card-text">Last updated 3 mins ago</p> */}

                                                <div className="card-body">
                                                    <h5 className="card-title">{transport.name}</h5>
                                                    <p className="card-text">Model: {transport.model}</p>
                                                    <p>Observations: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                    <Link to={"/vehicles/" + transport.name} className="btn btn-secondary">Go to...></Link>
                                                </div>
                                            </div>
                                        </>

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
                            !!store.vehicles &&
                                store.vehicles.previous !== null ?
                                (
                                    <button className="btn btn-dark btn-md"
                                        onClick={() => actions.getVehicles(store.vehicles.previous)}>
                                        <i class="fa fa-arrow-left"></i> Previous
                                    </button>
                                ) : (
                                    <span className="btn btn-dark btn-md disabled">
                                        <i class="fa fa-arrow-left"></i> Previous
                                    </span>
                                )
                        }
                        {
                            !!store.vehicles &&
                                store.vehicles.next !== null ?
                                (
                                    <button className="btn btn-dark btn-md"
                                        onClick={() => actions.getVehicles(store.vehicles.next)}>
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

export default Vehicles;