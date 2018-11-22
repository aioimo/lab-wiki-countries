import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetail from './CountryDetail.js'
import countries from './countries.json'
import { NavLink, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="title">WikiCountries</nav>
        <div className="row">
          <div id="left" className="col-4">
           <div className="list-group">
            {countries.map((country, i)=><NavLink to={`/` + country.cca3} key={i} className="list-group-item list-group-item-action">{country.name.common}</NavLink>)}
           </div>
         </div>
    
        <div id="right" className="col-8">
          <Switch>
            <Route path='/:cca3' component={CountryDetail}/>
          </Switch>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
