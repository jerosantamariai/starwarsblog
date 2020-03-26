import React, { useContext } from 'react';
import { Context } from '../store/appContext';


const Planets = props => {
    const { store, actions } = useContext(Context);
    const { planets } = store;
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.planets ?
                                store.planets.results.map((star, i) => {
                                    const img = star.name.split(" ").join("-").toLowerCase()+".jpg";
                                    return (
                                        < div className="card text-white bg-dark" key={i}>
                                            <img src={"img/planets/"+img} className="card-img-top" alt={"image of "+img} />
                                            <div className="card-body">
                                                <h5 className="card-title">{star.name}</h5>
                                                <p className="card-text">Climate: {star.climate}</p>
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

export default Planets;