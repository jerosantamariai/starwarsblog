import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './views/header';
import InfoSearch from './views/infosearch';
import BlogInfo from './components/bloginfo';


const Home = props => {
    const { store, actions } = useContext(Context);
    const { name } = store;
    return (
        <>
        <BrowserRouter>
            <Header />
            <div className="infosearch">
            <InfoSearch />
            <BlogInfo />
            </div>
            </BrowserRouter>
        </>
    )
}

export default Home;
// export default injectContext(Home);