import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../logo/12.png'

const NavBar = (props) => {

	const sessions = () => {
		return props.loggedin ?
		(<button className="appBtn" >
			<Link onClick={props.signOut} className="Homepage-link" to="/">
		  		Sign Out
			</Link>
	  	</button>) : (

		<div>
			<button className="appBtn" >
				<Link className="Homepage-link" to="/login">
					Sign In
				</Link>
			</button>
			<br/>
			<br/>

			<button className="appBtn" >
				<Link  className="Homepage-link" to="/signup">
					Sign Up
				</Link>
			</button>
		</div>
		  )
	}

	return(
		<AppBar className="nav-header" position="static">
			<Toolbar className="toolbar-header">

				<img  className="logo" src={logo} />
				<h1>
					HotSpot
				</h1>


				<div className="links">{sessions()}</div>

			</Toolbar>
		</AppBar>
	)
}

export default NavBar