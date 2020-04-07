import React from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const Entryform = props => {

    return (
        <>
            <div className="head">
                <h1 id="title">
                    freeCodeCamp Survey Form
                </h1>
                <p id="description"><i>Thank you for taking the time to help us improve the platform</i></p>
            </div>
            <div className="container col-7">
                <div className="row" id="survey-form">
                    <div className="subcontainer col-md-11">
                        <form>
                            <div className="form-group row">
                                <label for="name" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="email" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-12">
                                    <input type="email" className="form-control" id="email" placeholder="Enter your Email" />
                                    <div className="invalid-feedback">
                                        Please choose a correct email.
                            </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="number" className="col-sm-2 col-form-label">Age (Optional)</label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" id="number" placeholder="Age" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="dropdown" className="col-sm-12 col-form-label">Which option best describes your current
                            role?</label>
                                <div className="col-sm-12">
                                    <select className="form-control" id="dropdown">
                                        <option selected>Select current role</option>
                                        <option>Student</option>
                                        <option>Full Time Job</option>
                                        <option>Full Time Learner</option>
                                        <option>Prefer not to say</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            <fieldset className="form-group">
                                <div className="row">
                                    <legend className="col-form-label col-sm-12 pt-0">Would you recommend freeCodeCamp to a friend?
                            </legend>
                                </div>
                                <div className="row"></div>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                                            value="option1" checked />
                                        <label className="form-check-label" for="gridRadios1">
                                            Definitely
                                </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                            value="option2" />
                                        <label className="form-check-label" for="gridRadios2">
                                            Maybe
                                </label>
                                    </div>
                                    <div className="form-check disabled">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3"
                                            value="option3" />
                                        <label className="form-check-label" for="gridRadios3">
                                            Not sure
                                </label>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="dropdown" className="col-sm-12 col-form-label">What is your favorite feature of
                                freeCodeCamp?</label>
                                    <div className="col-sm-12">
                                        <select className="form-control" id="dropdown">
                                            <option selected>Select an option</option>
                                            <option>Challenges</option>
                                            <option>Projects</option>
                                            <option>Community</option>
                                            <option>Open Source</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-sm-12">What would you like to see improved? (Check all that apply)</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                            <label className="form-check-label" for="gridCheck1">
                                                Front-end Projects
                                    </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck2" />
                                            <label className="form-check-label" for="gridCheck2">
                                                Back-end Projects
                                    </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck3" />
                                            <label className="form-check-label" for="gridCheck3">
                                                Data Visualization
                                    </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck4" />
                                            <label className="form-check-label" for="gridCheck4">
                                                Challenges
                                    </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck5" />
                                            <label className="form-check-label" for="gridCheck5">
                                                Open Source Community
                                    </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck6" />
                                            <label className="form-check-label" for="gridCheck6">
                                                Gitter help rooms
                                    </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck7" />
                                            <label className="form-check-label" for="gridCheck7">
                                                Videos
                                    </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck8" />
                                            <label className="form-check-label" for="gridCheck7">
                                                City Meetups
                                    </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck7" />
                                            <label className="form-check-label" for="gridCheck8">
                                                Wiki
                                    </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck9" />
                                            <label className="form-check-label" for="gridCheck9">
                                                Forum
                                    </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck10" />
                                            <label className="form-check-label" for="gridCheck10">
                                                Additional Courses
                                    </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Any comments or suggestions?</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
                                        placeholder="Enter your comment here..."></textarea>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <button type="button" className="btn btn-success btn-md btn-block">Submit</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Entryform;
