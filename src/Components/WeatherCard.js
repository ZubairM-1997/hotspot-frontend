import React from 'react'

export default class WeatherCard extends React.Component {


	render() {
		return(
			<div className="weatherCard">

			<div className="humidity">
				<img className="weatherimage"src="https://image.flaticon.com/icons/svg/219/219816.svg"/>
				<li>Humidty: {this.props.currentWeather.humidity} %</li>
			</div>

			<div className="temperature">
				<img className="weatherimage" src="https://cdn2.iconfinder.com/data/icons/web-and-ui-15/20/749-512.png" />
				<li>Temperature: {this.props.currentWeather.temp_C} C</li>

			</div>

			<div className="wind">
				<img className="weatherimage" src="https://icon-library.net//images/wind-speed-icon/wind-speed-icon-17.jpg"/>
				<li>Wind Speed: {this.props.currentWeather.windspeedMiles} MPH</li>

			</div>

			<div className="feelslike">
				<img className="weatherimage" src="https://cdn2.iconfinder.com/data/icons/unhappy-businessman/240/emotion-feeling-010-512.png"/>
				<li>Feels like {this.props.currentWeather.FeelsLikeC} C </li>
			</div>

			</div>
		)
	}
}