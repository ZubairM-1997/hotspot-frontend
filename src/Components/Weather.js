import React from 'react'
import WeatherCard from './WeatherCard'





//Optional include of the default css styles


export default class Weather extends React.Component {

	state = {
		weather: ""
	}



	componentDidUpdate(prevProps, prevState){
		if (this.props.weather.lat && prevProps.weather.lat !== this.props.weather.lat) {
			fetch(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=d0d9ff2f5bce4647a9693045191807&q=${this.props.weather.lat},${this.props.weather.long}&format=json`)
			.then(resp => resp.json())
			.then((data) => this.temp({...data}))

		}
	}

	temp = (data) => {
		this.setState({
			weather: data.data.current_condition[0]
		})

	}

	render(){
		return(
			<div className="weather">
				<WeatherCard currentWeather={this.state.weather}/>


			</div>
		)
	}
}

