import React from 'react'
import SavedDestinations from '../Components/SavedDestinations'


export default class DestinationCollection extends React.Component{



	render(){
		return(
		<div className="destinationCollection">
			{
				this.props.names.map(name => <SavedDestinations destinationName={name}/>)
			}
		</div>

		)
	}
}