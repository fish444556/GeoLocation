import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			username: event.target.value
		});

	}

	handleSubmit(event) {
		const API = 'http://127.0.0.1:8088/user/saveinfo';
		event.preventDefault();
		const username = this.state.username;
		navigator.geolocation.getCurrentPosition( function (pos) {
	        var lat    = pos.coords.latitude,
	        long   = pos.coords.longitude,
	        coords = lat + ', ' + long;
	        var latlngStr = coords.split(',', 2);
	        var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
	        axios.post(API, {
	        	username: username,
	        	latitude: lat,
	        	longitude: long,
	        	userAgent: navigator.userAgent
	        })
	        window.location.reload();
	    })
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<button type="submit" className="btn btn-primary" >Save Info to Database</button>
			</form>
		)
	}
}

export default Login;