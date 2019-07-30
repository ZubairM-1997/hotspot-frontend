import React from 'react'
import TimeCard from './TimeCard'
import News from '../Components/News'
import Grid from '@material-ui/core/Grid';


export default class Time extends React.Component {

	state = {
		date: "",
		time: "",
		timeZone: "",
		localTime: "",
		countryCode: ""
	}

	componentDidUpdate(prevProps, prevState){
		if (this.props.time.lat && prevProps.time.lat !== this.props.time.lat)
			fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=7KBM9FF683CD&format=json&by=position&position&lat=${this.props.time.lat}&lng=${this.props.time.long}`)
			.then(resp => resp.json())
			.then(data => this.temp(data))

	}

	temp = (data) => {


		this.setState({
			date: data.formatted.slice(0,10),
			time: data.formatted.slice(11,20),
			timeZone: data.zoneName,
			localTime: data.formatted,
			countryCode: data.countryCode
		})

	}

	render() {
		return(
			<div class="card">
				<h2>Trending Tech News & Time</h2>
				<TimeCard date={this.state.date} time={this.state.time} timeZone={this.state.timeZone} localTime={this.state.localTime}/>
				<News countryCode={this.state.countryCode}/>


			</div>

		)
	}
}