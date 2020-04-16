// import React from 'react';
// import validar from 'main';


// const SignUpForm = props => {

//     return (
//         <>
//             <div className="boxsurvey">
//                 <div className="head">
//                     <h1 id="title">
//                         WELCOME TO STAR WARS SIGN UP!
//                 </h1>
//                     <p id="description"><i>Thank you for taking the time to sign up to our community</i></p>
//                 </div>
//                 <div className="container col-7">
//                     <div className="row" id="survey-form">
//                         <div className="subcontainer col-md-11">
//                             <form>
//                                 <div className="form-group row">
//                                     <label for="name" className="col-sm-2 col-form-label">Name</label>
//                                     <div className="col-sm-12">
//                                         <input type="text" className="form-control" id="name" placeholder="Enter your name" required/>
//                                     </div>
//                                 </div>
//                                 <div className="form-group row">
//                                     <label for="email" className="col-sm-2 col-form-label">Email</label>
//                                     <div className="col-sm-12">
//                                         <input type="email" className="form-control" id="email" placeholder="Enter your Email" required/>
//                                         <div className="invalid-feedback">
//                                             Please choose a correct email.
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="form-group row">
//                                     <label for="password" className="col-sm-2 col-form-label">Password</label>
//                                     <div className="col-sm-12">
//                                         <input type="text" className="form-control" id="name" placeholder="Enter your password" required/>
//                                     </div>
//                                 </div>
//                                 <div className="form-group row">
//                                     <label for="number" className="col-sm-2 col-form-label">Age (Optional)</label>
//                                     <div className="col-sm-12">
//                                         <input type="text" className="form-control" id="number" placeholder="Age" />
//                                     </div>
//                                 </div>
//                                 <div className="form-group row">
//                                     <label for="dropdown" className="col-sm-12 col-form-label">Which option best describes your current
//                             role?</label>
//                                     <div className="col-sm-12">
//                                         <select className="form-control" id="dropdown">
//                                             <option selected>Select current role</option>
//                                             <option>Web Jedi</option>
//                                             <option>Just looking for fun</option>
//                                             <option>I want to know more about SW universe</option>
//                                             <option>Prefer not to say</option>
//                                             <option>Other</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <fieldset className="form-group">
//                                     <div className="row">
//                                         <legend className="col-form-label col-sm-12 pt-0">Would you recommend our page to a friend?</legend>
//                                     </div>
//                                     <div className="row"></div>
//                                     <div className="col-sm-10">
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
//                                                 value="option1" checked />
//                                             <label className="form-check-label" for="gridRadios1">
//                                                 Definitely
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
//                                                 value="option2" />
//                                             <label className="form-check-label" for="gridRadios2">
//                                                 Maybe
//                                             </label>
//                                         </div>
//                                         <div className="form-check disabled">
//                                             <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3"
//                                                 value="option3" />
//                                             <label className="form-check-label" for="gridRadios3">
//                                                 Not sure
//                                             </label>
//                                         </div>
//                                     </div>
//                                     <div className="form-group row">
//                                         <label for="dropdown" className="col-sm-12 col-form-label">What is your favorite feature of
//                                 our page?</label>
//                                         <div className="col-sm-12">
//                                             <select className="form-control" id="dropdown">
//                                                 <option selected>Select an option</option>
//                                                 <option>Collage</option>
//                                                 <option>People</option>
//                                                 <option>Planets</option>
//                                                 <option>Other</option>
//                                             </select>
//                                         </div>
//                                     </div>

//                                     <div className="form-group row">
//                                         <div className="col-sm-12">What information do you like to recived on your email? (Check all that apply)</div>
//                                     </div>
//                                     <div className="row">
//                                         <div className="col-sm-12">
//                                             <div className="form-check">
//                                                 <input className="form-check-input" type="checkbox" id="gridCheck1" />
//                                                 <label className="form-check-label" for="gridCheck1">
//                                                     Jedi Information
//                                     </label>
//                                             </div>
//                                             <div className="form-check">
//                                                 <input className="form-check-input" type="checkbox" id="gridCheck2" />
//                                                 <label className="form-check-label" for="gridCheck2">
//                                                     Sith Information
//                                     </label>
//                                             </div>
//                                             <div className="form-check">
//                                                 <input className="form-check-input" type="checkbox" id="gridCheck3" />
//                                                 <label className="form-check-label" for="gridCheck3">
//                                                     Other
//                                     </label>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="form-group">
//                                         <label for="exampleFormControlTextarea1">Any comments or suggestions?</label>
//                                         <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
//                                             placeholder="SORRY FOR TAKE A LOT OF TIME BUT THIS IS JUST A MODELING PAGE TO KNOW ALL THE FEATURES THAT YOU CAN USE IN A FORM"></textarea>
//                                     </div>
//                                     <div className="form-group row">
//                                         <div className="col-sm-12">
//                                             <button type="button" className="btn btn-success btn-md btn-block">Submit</button>
//                                         </div>
//                                     </div>
//                                 </fieldset>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


// export default SignUpForm;
