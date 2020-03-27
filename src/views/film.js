import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const Film = props => {
    const { store, actions } = useContext(Context);
    const { films } = store;
    const movie = props.match.params.movies;
    return (
        <>

            <div className="container">

                <div className="card-group">
                    <div className="row">
                        {
                            !!store.films ?
                                store.films.results.map((film, i) => {
                                    if (JSON.stringify(film.title) === JSON.stringify(movie)) {
                                        const img = film.title.split(" ").join("-").toLowerCase() + ".jpg";
                                        return (
                                            <div className="row card-group text-white bg-dark mb-3 d-flex justify-content-center" key={i}>
                                                <div className="col-3 my-auto">
                                                    <img src={"/img/films/" + img} className="card-img-top" alt={"image of " + img} />
                                                    <Link to={"/people"} className="btn btn-secondary d-flex justify-content-center">Back to Characters!</Link>
                                                </div>
                                                <div className="col-9 py-4">
                                                    <h5 className="card-title">{film.title}</h5>
                                                    <p className="card-text">Episode Number: {film.episode_id}</p>
                                                    <p className="card-text">Director: {film.director}</p>
                                                    <p className="card-text">Producer: {film.producer}</p>
                                                    <p className="card-text">Release Date: {film.release_date}</p>
                                                    <p className="card-text">Observations: {film.opening_crawl}</p>
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

export default Film;