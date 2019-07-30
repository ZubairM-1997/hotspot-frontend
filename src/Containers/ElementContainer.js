import React from 'react'
import GMap from '../Components/GMap'
import Weather from '../Components/Weather'
import Time from '../Components/Time'
import Grid from '@material-ui/core/Grid';





class ElementContainer extends React.Component{
	render(){
		return(

			<div>
			<Grid container spacing={10}>
				<Grid item xs={6}>
					<GMap map={this.props.coordinates} />
				</Grid>

				<Grid item xs={6}>
					<Weather weather={this.props.coordinates}/>
				</Grid>

				<Grid item xs={12}>
					<Time time={this.props.coordinates}/>
				</Grid>


			</Grid>








			</div>


		)
	}

}
export default ElementContainer