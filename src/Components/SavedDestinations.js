import React from 'react'

export default class SavedDestinations extends React.Component{

	render(){
		return(
			<div className="savedDestinations">
				<address>
					{this.props.destinationName}
					<br/>
					<button>Delete</button>
				</address>
			</div>
		)
	}
}