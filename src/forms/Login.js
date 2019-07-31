import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {authUser} from '../api'
import { validate } from '@babel/types';
import logo from '../logo/12.png'

export default class LogIn extends React.Component {

	state = {
		email: "",
		password: "",
		serverError: ""

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





	handleSubmit = (event) => {
		event.preventDefault()
		let isError = false

				if (this.state.password.length < 6) {
					alert("Please enter your password")
					isError = true
				}

				if (this.state.email.indexOf("@") === -1) {
					alert("Please enter a valid email")
					isError = true
				}

				if (isError === false) {
					authUser(this.state.email, this.state.password)
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





	render() {
		return(

		<div>


					<div className="signup-container">
						<div className="signup-card">
						<form onSubmit={this.handleSubmit}>
							<h3>Log In</h3>

							<TextField
							label="Enter your email"
							margin="normal"
							name="email"
							onChange={this.handleEmailChange}

							/>
							<br />
							<TextField
							label="Choose a Password"
							margin="normal"
							name="password"
							type="password"
							onChange={this.handlePasswordChange}
							/>

							<br />
							<br />
							<Button type="submit" variant="contained" color="primary">
							SUBMIT
							</Button>
						</form>
					</div>
			</div>
			<div className="logoContainer">
						<img className="logo" src={logo} />
			</div>
		</div>

		)
	}
}