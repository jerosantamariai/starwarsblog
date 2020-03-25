import React from 'react';

const InfoSearch = props => {
    return (
        <>
                <div className="databanksearch">
                    <div className="row d-flex justify-content-center">
                        <div className="col-10">
                            <div className="input-group input-group-lg">
                                <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="SEARCH DATABANK" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button"><i className="fa fa-search"></i>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr width="1050px" height="5px" color="gray"></hr>
                <h6 className="firsttitle">STAR WARS: THE RISE OF SKYWALKER //</h6>
                <hr width="1050px" height="5px" color="gray"></hr>
        </>
    )
}

export default InfoSearch;