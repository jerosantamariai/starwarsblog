import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const Person = props => {
    const { store, actions } = useContext(Context);
    const { people } = store;
    const peoplename = props.match.params.person;
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
                                            <div className="row card-group text-white bg-dark mb-3 d-flex justify-content-center" key={i}>
                                                <div className="col-3 my-auto">
                                                    <img src={"/img/characters/" + img} className="card-img-top" alt={"image of " + img} />
                                                    <Link to={"/people"} className="btn btn-secondary d-flex justify-content-center">Back to Characters!</Link>
                                                </div>
                                                <div className="col-9 py-4">
                                                    <h5 className="card-title">{peoper.name}</h5>
                                                    <p className="card-text">Birth Year: {peoper.birth_year}</p>
                                                    <p className="card-text">Gender: {peoper.gender}</p>
                                                    <p className="card-text">hair_color: {peoper.hair_color}</p>
                                                    <p className="card-text">height: {peoper.height}</p>
                                                    <p className="card-text">mass: {peoper.mass}</p>
                                                    <p className="card-text">skin_color: {peoper.skin_color}</p>
                                                    <p className="card-text">created: {peoper.created}</p>
                                                    <p className="card-text">edited: {peoper.edited}</p>
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

export default Person;