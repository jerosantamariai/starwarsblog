import React, { useContext } from 'react';
import { Context } from '../store/appContext';


const People = props => {
    const { store, actions } = useContext(Context);
    const { people } = store;
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            !!store.people ?
                                store.people.results.map((character, i) => {
                                    const img = character.name.split(" ").join("-").toLowerCase()+".jpg";
                                    return (
                                        < div className="card text-white bg-dark" key={i}>
                                            <img src={"img/"+img} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{character.name}</h5>
                                                <p className="card-text">Eye Color: {character.eye_color}</p>
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

export default People;