import React from 'react'
import GMap from '../Components/GMap'
import Weather from '../Components/Weather'
import Time from '../Components/Time'



class ElementContainer extends React.Component{
	render(){
		return(
			<div className="elementContainer">
				<GMap map={this.props.coordinates} />
				<br />
				<Weather weather={this.props.coordinates}/>
				<Time time={this.props.coordinates}/>


			</div>
		)
	}

}
export default ElementContainer