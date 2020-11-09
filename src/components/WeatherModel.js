import React from "react"
import "../styles/WeatherModel.css"
import "../../node_modules/weather-icons/css/weather-icons.min.css"
function WeatherModel(props){
    let iconNameClass = "icon wi " + props.iconName
    return(
         <div className = "container center">
             <h1 className = "main">{props.CityCountry}</h1>
             <i className={iconNameClass}></i>
             <h2 className = "temp">{props.Temp}</h2>
             <span className = "Temp">
                <h3 className = "minTemp">{props.minTemp}</h3>
                <h3 className = "maxTemp">{props.maxTemp}</h3>
             </span>
             <h3 className = "desc">{props.Desc}</h3>
        </div>
    )
}

export default WeatherModel