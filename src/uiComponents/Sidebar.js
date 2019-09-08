import React, { Component } from 'react';
import axios from 'axios';

export default class SideBar extends Component {
  cityName= null
  newData = [];
  componentDidMount() {
    var weatherData = [];
    function success(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
     fetch("http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=4d0cedb0b2ae0c240bf3c08ab455915e")
      .then(res => res.json())
      .then(data => weatherData.push(data));
    }

    function error(err) {
      alert(err.code);
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }

  
  getCityName(event) {
    this.cityName = event.currentTarget.value;
  }

  getWeatherData() {
    axios.get("http://api.openweathermap.org/data/2.5/forecast?q="+this.cityName+"&appid=4d0cedb0b2ae0c240bf3c08ab455915e")
    .then(response => this.newData.push(response))
    .catch(error => alert(error));
  }

  render() {
    return(
      <div>
        <input type="text" onBlur={(e) => this.getCityName(e)} />
        <button onClick={this.getWeatherData.bind(this)}>Submit</button>
      </div>
    )
  }
}