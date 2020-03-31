import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const People = props => {
    const { store, actions } = useContext(Context);
    const { people } = store;
    return (
        <>

            <div className="container">
                <div class="card-group">
                    <div className="row">
                        {
                            !!store.people ?
                                store.people.results.map((character, i) => {
                                    const img = character.name.replace("/", "'").split(" ").join("-").toLowerCase() + ".jpg";
                                    return (
                                        < div className="card text-white bg-dark col-3 mb-3" key={i}>
                                            <img src={"img/characters/" + img} className="card-img-top" alt={"image of " + img} />
                                            {/* <a classNam="text" id="overlay">GO!</a> */}
                                            <div className="card-body">
                                                <h5 className="card-title">{character.name}</h5>
                                                <p className="card-text">Eye Color: {character.eye_color}</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <Link to={"/people/" + character.name} className="btn btn-secondary">Go to...></Link>
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
            </div>
        </>
    )
}

export default People;