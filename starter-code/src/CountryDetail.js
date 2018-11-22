
import React, { Component } from 'react'
import countries from './countries.json'
import { Link } from 'react-router-dom';

export default class CountryDetails extends Component {

  getCountry = (cca3) => {
    return countries.find(c=>c.cca3 ===cca3)
  };
  

  render() {
    let myCountry = this.getCountry(this.props.match.params.cca3)
    return (
      <div className="CountryDetails">
        <h1>{myCountry.name.common}</h1>
        <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{myCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{myCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {myCountry.borders.map(country=>
                      <li><Link to={'/' + this.getCountry(country).cca3}>{this.getCountry(country).name.common}</Link></li>
                      )}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>
    )
  }
}