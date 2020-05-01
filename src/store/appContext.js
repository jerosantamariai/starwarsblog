import React, { Component } from 'react';
import getState from './flux';

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    class StoreWrapper extends Component {
        constructor(props){
            super(props);

            this.state = getState({
                getStore: () => this.state.store,
                getActions: () => this.state.actions,
                setStore: updateStore => this.setState({
                    store: Object.assign(this.state.store, updateStore),
                    actions: {...this.state.actions}
                })
            })
        }

        componentDidMount(){
            this.state.actions.getPeople('https://swapi.dev/api/people');
            this.state.actions.getVehicles('https://swapi.dev/api/vehicles');
            this.state.actions.getPlanets('https://swapi.dev/api/planets');
            this.state.actions.getFilms('https://swapi.dev/api/films');
            this.state.actions.getSpecies('https://swapi.dev/api/species');
        }

        render(){
            return (
                <Context.Provider value={this.state}>
                    <PassedComponent {...this.props} />
                </Context.Provider>
            )
        }
    }
    return StoreWrapper;
}

export default injectContext; 