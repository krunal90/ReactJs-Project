import React, { Component } from 'react';
import axios from 'axios';

export default class SideBar extends Component {
  constructor(props){
    super(props)
    this.state = {weatherData:[],cityName:null}
  }
  componentDidMount() {
    const success = (position) => {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
     fetch("http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=4d0cedb0b2ae0c240bf3c08ab455915e")
      .then(res => res.json())
      .then(data => this.setState({weatherData:data}));
    }

    const error = (err) => {
      alert(err.code);
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }

  getCityName(event) {
    this.setState({cityName:event.currentTarget.value});
  }

  getWeatherData() {
    axios.get("http://api.openweathermap.org/data/2.5/forecast?q="+this.state.cityName+"&appid=4d0cedb0b2ae0c240bf3c08ab455915e")
    .then((response) => this.setState({weatherData:response.data}))
    .catch((error) => alert(error));
    console.log(this.state.weatherData.list);
  }

  render() {
    return(
      <div>
        <input type="text" onBlur={(e) => this.getCityName(e)} />
        <button onClick={this.getWeatherData.bind(this)}>Submit</button>
        <p>{this.state.weatherData.cod}</p>
      </div>
    )
  }
}