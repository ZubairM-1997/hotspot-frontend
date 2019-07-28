import React from 'react'

class NameCard extends React.Component{





	render(){
		return(
			<div className="nameCard">
				<h1>Welcome {this.props.name}</h1>
			</div>
		)

	}

}

export default NameCard;