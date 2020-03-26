import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import injectContext from './store/appContext';
import Header from './components/header';
import InfoSearch from './components/infosearch';
import People from './views/people';
// import Vehicles from './components/view/vehicles';
// import Planets from './components/view/planets';


const App = props => {
    return (
        <BrowserRouter>
            <Header />
            <div className="infosearch">
                <InfoSearch />
                </div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/people" component={People} />
                    {/* <Route exact path="/vehicles" component={Vehicles} />
                    <Route exact path="/planets" component={Planets} />   */}
                


                <Route render={() => <h1>Not Found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}


export default injectContext(App);