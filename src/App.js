import React from 'react';
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


const App = props => {
    return (
        <BrowserRouter>
            <Header />
            <div className="infosearch">
                <InfoSearch />
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
        </BrowserRouter>
    )
}


export default injectContext(App);