import React from 'react'
import LiveClock from 'react-live-clock'



export default class TimeCard extends React.Component{

	render() {
		return(
			<div className="clocks">
				<h1>Local Time:</h1>
				<LiveClock className="liveclock"format={'HH:mm:ss'} ticking={true} timezone={`${this.props.timeZone}`} />
			</div>
		)
	}
}