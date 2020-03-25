import React from 'react';

const Vehicles = props => {
    return (
        <>
            
                <div className="card text-white bg-dark">
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
        
        </>
    )
}

export default Vehicles;