import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import Geocode from 'react-geocode';
import { thisExpression } from '@babel/types';
import {getDestinations} from '../api'
import LocationCard from './LocationCard'
import DestinationCollection from '../Containers/DestinationCollection'
import Grid from '@material-ui/core/Grid';





Geocode.setApiKey("AIzaSyDXJow1kwlR8FoDR98HgVC7Q4ok8ZXaujM")
Geocode.enableDebug();



export default class GMap extends React.Component {
	state = {
		area: '',
		currentDestinations: []
	}

componentDidMount(){
	getDestinations().then((data) => this.setDestinationState(data))
}



setDestinationState = (data) => {
	this.setState({
		currentDestinations:  data
	})
}

removeDestination = (id) => {
	this.setState({
		currentDestinations: this.state.currentDestinations.filter(destination => destination._id !== id)
	})
}



componentDidUpdate(prevProps, prevState) {

		if (prevProps.map.lat !== this.props.map.lat) {
			Geocode.fromLatLng(this.props.map.lat, this.props.map.long)
			.then(
				response => {
					const address = response.results[0].formatted_address;
					this.setState({area: address})
				},
			error => {
			console.error(error);
		}
	  );}
}


setDestination = (destination) => {
	this.setState({
		currentDestinations: [...this.state.currentDestinations, destination]
	},
		() => {console.log(this.state.currentDestinations)}
	)
}







	render() {




		const GoogleMaps = withScriptjs(withGoogleMap(props => (
			<GoogleMap
				defaultCenter = {{lat: this.props.map.lat, lng: this.props.map.long}}
				defaultZoom = {13}

			>
				<Marker position={{lat: this.props.map.lat, lng: this.props.map.long}} draggable={true} />

			</GoogleMap>
		)));

		return(
			<div className="card">
				<h2>Map & Destinations</h2>
				<Grid container spacing={2}>
					<Grid item xs={5}>
						<div className="googleMaps">
							<GoogleMaps
								isMarkerShown
								googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDXJow1kwlR8FoDR98HgVC7Q4ok8ZXaujM&callback=initMap"
								loadingElement={<div style={{ height: `100%` }} />}
								containerElement={<div style={{ height: `450px`}} />}
								mapElement={<div style={{ height: `100%` }} />}
							/>
						</div>

					</Grid>

					<Grid item xs={5}>
						<div className="collection">
							<LocationCard   destinationFunc={this.setDestination} areaName={this.state.area} long={this.props.map.long} lat={this.props.map.lat}/>
							<br/>
							<DestinationCollection removeDestination={this.removeDestination} destinations={this.state.currentDestinations}/>
						</div>
					</Grid>
				</Grid>



			</div>
		)
	}
}