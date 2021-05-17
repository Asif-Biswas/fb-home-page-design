import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Body from './Body'
import Groups from './Groups';
import MarketPlaces from './MarketPlaces';
import Videos from './Videos';

class RouterComponent extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Body}/>
                <Route path='/videos' component={Videos}/>
                <Route path='/marketplaces' component={MarketPlaces}/>
                <Route path='/groups' component={Groups}/>
                
            </div>
        );
    }
}

export default RouterComponent;