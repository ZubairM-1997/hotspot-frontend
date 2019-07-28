import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBar = (props) => {

	const sessions = () => {
		return props.loggedin ?
		(<Button variant="contained" color="primary" >
			<Link onClick={props.signOut} className="Homepage-link" to="/">
		  		Sign Out
			</Link>
	  	</Button>) : (

		<div>
			<Button variant="contained" color="primary" >
				<Link className="Homepage-link" to="/login">
					Sign In
				</Link>
			</Button>

			<Button variant="contained" color="primary" >
				<Link  className="Homepage-link" to="/signup">
					Sign Up
				</Link>
			</Button>
		</div>
		  )
	}

	return(
		<AppBar className="nav-header" position="static">
			<Toolbar className="toolbar-header">

				<h1>
					HotSpot
				</h1>

				<div className="links">{sessions()}</div>

			</Toolbar>
		</AppBar>
	)
}

export default NavBar