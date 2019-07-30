import React from 'react'
import { statement } from '@babel/template';
import {createDestination} from '../api'
import {getDestinations} from '../api'


export default class LocationCard extends React.Component {

	state = {
		name:  "",
		location: {
			coordinates: []
		}
	}


	handleOnClick = () => {
		this.setState({
			name: this.props.areaName,
			location: {
				coordinates: [this.props.lat, this.props.long]
			}
		},
		() => {
			createDestination(this.state.name, this.state.location)
			.then(resp => {
				if(resp.status === 200) {
					this.props.destinationFunc(resp)
				} else (
					alert("Name is required")
				)
			})
		})


	}





	render() {
		return(
			<div className="locationCard">
				<h2>{this.props.areaName}</h2>
				<li>Latitude: {this.props.lat}, Longitude: {this.props.long}</li>
				<button className="appBtn" onClick={this.handleOnClick}>Add this to your destination!</button>
			</div>

		)
	}
}