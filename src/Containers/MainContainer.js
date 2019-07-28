import React, {Fragment} from 'react'
import SearchBar from '../Components/SearchBar'
import NameCard from '../Components/NameCard'


export default class MainContainer extends React.Component{

	state = {
		name: ""
	}


	setName = (data) => {
		this.setState({
			name: data
		})
	}

	componentDidMount(){
		   return fetch("http://localhost:5000/api/auth", {
			   method: "GET",
			   headers: {
				   "x-auth-token": localStorage.token,
				   "Content-Type": "application/json"
			   }
		   })
		   .then(resp => resp.json())
		   .then(data => this.setName(data.name))


   }
	render() {
		return(
			<div className="mainContainer">
				<NameCard name={this.state.name}/>
				<SearchBar   changingTheState={this.props.stateChange}/>
			</div>

		)
	}
}