import React from 'react'
import SavedDestinations from '../Components/SavedDestinations'


export default class DestinationCollection extends React.Component{



	render(){
		return(
		<div className="destinationCollection">
			{
				this.props.destinations.map(destination => <SavedDestinations remove={this.props.removeDestination} destination={destination}/>)
			}
		</div>

		)
	}
}