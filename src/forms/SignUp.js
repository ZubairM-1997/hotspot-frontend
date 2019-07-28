import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {createUser} from '../api'

export default class SignUp extends React.Component{

	state = {
		name: "",

		email: "",

		password: "",

		passwordConfirmation: ""


	}

	handleNameChange = (event) => {
		this.setState({
			name: event.target.value
		})
	}

	handleEmailChange = (event) => {
		this.setState({
			email: event.target.value
		})
	}

	handlePasswordChange = (event) => {
		this.setState({
			password: event.target.value
		})
	}

	handlePasswordConfirmation = (event) =>{
		this.setState({
			passwordConfirmation: event.target.value
		})
	}



	handleSubmit = (event) => {
		event.preventDefault()


		let isError = false

		if (this.state.name === "") {
			alert("Name cannot be empty")
			isError = true
		}

		if (this.state.password.length < 6) {
			alert("Please enter a password that has more than 6 charachters")
			isError = true
		}

		if (this.state.email.indexOf("@") === -1) {
			alert("Please enter a valid email")
			isError = true
		}

		if (this.state.password !== this.state.passwordConfirmation) {
			alert("You have entered two different passwords, try again")
			isError = true
		}

		if (isError === false) {
			createUser(this.state.name, this.state.email, this.state.password)
			.then((res) => {
				if (res.status === 400) {
					alert(`Error ${res.status}: ${res.message}`)
				} else {
					this.props.tokenSetting(res)
				}
			})
			.catch(console.error)
		}

	}



	render(){
		return(
		<div className="signup-container">
        	<div className="signup-card">
			<form onSubmit={this.handleSubmit}>
				<h3>Sign Up</h3>

				<TextField
				label="Enter your name"
				margin="auto"
				name="name"
				onChange={this.handleNameChange}

				/>
				<br />

				<TextField
				label="Enter your email"
				margin="auto"
				name="email"
				onChange={this.handleEmailChange}

				/>
				<br />
				<TextField
				label="Choose a Password"
				margin="auto"
				name="password"
				type="password"
				onChange={this.handlePasswordChange}

				/>

				<br />
				<TextField
				label="Confirm Password"
				margin="auto"
				name="passwordConfirm"
				type="password"
				onChange={this.handlePasswordConfirmation}

				/>



				<br />
				<br />
				<Button type="submit" variant="contained" color="primary">
				SUBMIT
				</Button>
			</form>
        </div>
      </div>

		)
	}
}