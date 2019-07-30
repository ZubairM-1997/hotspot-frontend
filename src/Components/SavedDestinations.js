import React from 'react'
import {deleteDestination} from '../api'

export default class SavedDestinations extends React.Component{


	handleOnClick = (id) => {
		deleteDestination(id).then( () => this.props.remove(id))
	}

	render(){
		return(
			<div className="savedDestinations">
				<address>
					{this.props.destination.name}
					<br/>
					<button className="appBtn" onClick={() => this.handleOnClick(this.props.destination._id)}>Delete</button>
				</address>
			</div>
		)
	}
}