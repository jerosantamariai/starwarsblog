import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import injectContext from './store/appContext';
import Header from './components/header';
import InfoSearch from './components/infosearch';
import People from './views/people';
import Vehicles from './views/vehicles';
import Planets from './views/planets';
import Transports from './views/vehiclestransports';
import Person from './views/peoplepersons';
import Places from './views/planetplaces';
import Films from './views/films';
import Film from './views/film';
import Species from './views/species';
import Specie from './views/specie';
import Carousel from './components/carousel';
import Footer from './views/footer';


const App = props => {
    const [state, setState] = useState({
        galery: [
            {
                id: 1,
                image: 'http://placehold.it/1900x1080',
                title: "First Slide",
                description: "This is a description for the first slide."
            },
            {
                id: 2,
                image: 'http://placehold.it/1900x1080',
                title: "Second Slide",
                description: "This is a description for the second slide."
            },
            {
                id: 3,
                image: 'http://placehold.it/1900x1080',
                title: "Third Slide",
                description: "This is a description for the third slide."
            }
        ]
    })

    return (
        <BrowserRouter>
            <Header />
            <div className="infosearch">
                <InfoSearch />
                <Carousel slide={state.galery} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/vehicles/:vehicle" component={Transports} />
                    <Route exact path="/people/:person" component={Person} />
                    <Route exact path="/planets/:places" component={Places} />
                    <Route exact path="/films/:movies" component={Film} />
                    <Route exact path="/species/:razes" component={Specie} />
                    <Route exact path="/people" component={People} />
                    <Route exact path="/vehicles" component={Vehicles} />
                    <Route exact path="/planets" component={Planets} />
                    <Route exact path="/films" component={Films} />
                    <Route exact path="/species" component={Species} />
                    <Route render={() => <h1 id="undefined">Not Found</h1>} />
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    )
}


export default injectContext(App);