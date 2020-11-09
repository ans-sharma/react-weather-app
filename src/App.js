import React from "react";
import WeatherModel from "./components/WeatherModel"
import a from "./resources/api.json"
const apiID = a.data[0].apikey;  //fetching the Id From the json file(This is for Security purpose only)


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      place: undefined,
      country: undefined,
      temp: undefined,
      maxTemp: undefined,
      minTemp: undefined,
      icon: undefined,
      desciption: undefined
    }
    this.getWeather();
  }
  // http://api.openweathermap.org/data/2.5/weather?q=London&appid=d5ff46f0e0eef5c52d628b55a48e2a49

  weatherIcons(code) {
    if (code >= 200 && code < 300)
      return "wi-thunderstorm"
    else if (code >= 300 && code < 400)
      return "wi-sleet"
    else if (code >= 500 && code < 600)
      return "wi-storm-showers"
    else if (code >= 600 && code < 700)
      return "wi-snow"
    else if (code >= 700 && code < 800)
      return "wi-fog"
    else if (code == 800)
      return "wi-cloud"
    else if (code > 800 && code < 810)
      return "wi-cloudy"
  }

  tempInCel(temp) {
    return Math.floor(temp - 273.15)
  }
  getWeather = async () => {
    const apiCall = await fetch(apiID)
    const response = await apiCall.json();
    console.log(response);
    this.setState({
      place: response.name,
      country: response.sys.country,
      icon: this.weatherIcons(response.weather[0].id),
      temp: this.tempInCel(response.main.temp),
      maxTemp: this.tempInCel(response.main.temp_max),
      minTemp: this.tempInCel(response.main.temp_min),
      desciption: response.weather[0].description
    })
  }

  render() {
    let CityCountry = this.state.place + ", " + this.state.country
    console.log(this.state.icon)
    return (
      <div className="wallpaper">
        <WeatherModel CityCountry={CityCountry} iconName={this.state.icon} Temp={this.state.temp} minTemp={this.state.minTemp} maxTemp={this.state.maxTemp} Desc={this.state.desciption}></WeatherModel>
      </div>
    )
  }
}
export default App