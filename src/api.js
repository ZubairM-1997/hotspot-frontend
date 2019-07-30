import { DEFAULT_ECDH_CURVE } from "tls";

const userURL = "http://localhost:5000/api/users"
const destinationURL = "http://localhost:5000/api/destinations/"
const authURL = "http://localhost:5000/api/auth"

export const createUser = (name, email, password) => {
	return fetch(userURL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({name, email, password})
	}).then(resp => resp.json())
}


export  const authUser = (email, password) => {
	return fetch(authURL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({email, password})
	}).then(resp => resp.json())
	.catch(err => console.log(err))
}


export  const createDestination = (name, location) => {
	return fetch(destinationURL, {
		method: "POST",
		headers: {
			"x-auth-token": localStorage.token,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({name, location})
	}).then(resp => resp.json())
}

export const getDestinations = () => {
	return fetch(destinationURL, {
	method: "GET",
	headers: {
		"x-auth-token": localStorage.token,
		"Content-Type": "application/json"
		}
	}).then(resp => resp.json())
}

export const deleteDestination = (id) => {
	return fetch(destinationURL + `${id}`, {
		method: "DELETE",
		headers: {
			"x-auth-token": localStorage.token,
			"Content-Type": "application/json"
			}
	}).then(resp => resp.json() )
}




export default {
	createUser,
	authUser,
	createDestination,
	getDestinations,
	deleteDestination
}

