import React from 'react'
import ElementContainer from './Containers/ElementContainer'
import MainContainer from './Containers/MainContainer'




export default class Main extends React.Component{
	state = {
		//state for weather and map data (Google Maps)
		coordinates: {
		  lat: 51.5074,
		  long: 0.1278
		}

	  }






	  handleCoordinateChange = (event) => {
		this.setState({
		  coordinates: {
			lat: event.coordinates.lat,
			long: event.coordinates.lng
		  }
		})
	  }

	  changeState = (event) => {
		this.handleCoordinateChange(event)
	  }




	render() {
		return(
			<div className="main">


				<MainContainer  name={this.renderName} stateChange={this.changeState}/>
				<br/>
				<br/>
				<br/>
              	<ElementContainer coordinates={this.state.coordinates}/>
			</div>

		)
	}
}