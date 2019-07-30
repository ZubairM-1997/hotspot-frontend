import React from 'react'

export default class WeatherCard extends React.Component {




	render() {
		return(
			<div className="weatherCard">
				<h3><span>Wind: {this.props.currentWeather.windspeedMiles} mph <span class="dot">•</span> Precip {this.props.currentWeather.precipMM} % </span></h3>
				<h2>Oberservation Time: {this.props.currentWeather.observation_time}</h2>
				<h1>{this.props.currentWeather.temp_C} C</h1>
				<h1>{this.props.currentWeather.temp_F} F</h1>

			<table>
				<tr>
					<td>HUMIDITY</td>
					<td>CLOUD COVER</td>
					<td>FEELS LIKE</td>
					<td>PRESSURE</td>

				</tr>
				<tr>
					<td>{this.props.currentWeather.humidity} %</td>
					<td>{this.props.currentWeather.cloudcover} %</td>
					<td>{this.props.currentWeather.FeelsLikeC} C</td>
					<td>{this.props.currentWeather.pressure}</td>
				</tr>
				<tr>
					<td><img className="weatherimage" src="https://cdn1.iconfinder.com/data/icons/weather-line-icon-set-3/100/humidity-512.png"/></td>
					<td><img className="weatherimage" src="https://image.flaticon.com/icons/svg/33/33415.svg"/></td>
					<td><img className="weatherimage" src="https://cdn0.iconfinder.com/data/icons/apps-set/512/phone-app-seo-weather-forecast-cloud-feel-512.png"/></td>
					<td><img className="weatherimage" src="https://cdn1.iconfinder.com/data/icons/transport-78/65/20-512.png"/></td>

				</tr>
			</table>

			</div>
		)
	}
}