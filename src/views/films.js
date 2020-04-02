import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const Films = props => {
    const { store, actions } = useContext(Context);
    const { films } = store;
    return (
        <>

            <div className="container">
                <div class="card-group">
                    <div className="row">
                        {
                            !!store.films ?
                                store.films.results.map((film, i) => {
                                    const img = film.title.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (
                                        < div className="card text-white bg-dark col-3 mb-3" key={i}>
                                            <img src={"img/films/" + img} className="card-img-top" alt={"image of " + img} />
                                            {/* <a classNam="text" id="overlay">GO!</a> */}
                                            <div className="card-body">
                                                <h5 className="card-title">{film.title}</h5>
                                                <p className="card-text">Director: {film.director}</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <Link to={"/films/" + film.title} className="btn btn-secondary">Go to...></Link>
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
                <div className="row pb-5" id="moreinfo">
                    <div className="col-md-6 offset-3 d-flex justify-content-between">
                        {
                            !!store.films &&
                                store.films.previous !== null ?
                                (
                                    <button className="btn btn-dark btn-md"
                                        onClick={() => actions.getFilms(store.films.previous)}>
                                        <i class="fa fa-arrow-left"></i> Previous
                                    </button>
                                ) : (
                                    <span className="btn btn-dark btn-md disabled">
                                        <i class="fa fa-arrow-left"></i> Previous
                                    </span>
                                )
                        }
                        {
                            !!store.films &&
                                store.films.next !== null ?
                                (
                                    <button className="btn btn-dark btn-md"
                                        onClick={() => actions.getFilms(store.films.next)}>
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

export default Films;