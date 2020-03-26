import React, { useContext } from 'react';
import { Context } from '../store/appContext';


const Vehicles = props => {
    const { store, actions } = useContext(Context);
    const { vehicles } = store;
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.vehicles ?
                                store.vehicles.results.map((transport, i) => {
                                    const img = transport.name.split(" ").join("-").toLowerCase()+".jpg";
                                    return (
                                        < div className="card text-white bg-dark" key={i}>
                                            <img src={"img/vehicles/"+img} className="card-img-top" alt={"image of "+img} />
                                            <div className="card-body">
                                                <h5 className="card-title">{transport.name}</h5>
                                                <p className="card-text">Model: {transport.model}</p>
                                            </div>
                                        </div>
                                    )
                                })
                                :(
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Vehicles;