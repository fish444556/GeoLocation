import React, { Component } from 'react';
import axios from 'axios';

import './Login.css';

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
		let getLatLng = new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition( function (pos) {
				let lat    = pos.coords.latitude,
				long   = pos.coords.longitude,
				coords = lat + ', ' + long;
				let latlngStr = coords.split(',', 2);
				resolve	({lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])});
			});
		});

		getLatLng.then(latLng => {
			let geocoder = new window.google.maps.Geocoder();
			let address = new Promise((resolve, reject) => {
				geocoder.geocode({'location': latLng}, function(results, status) {
					if (status === 'OK') {
						if (results[0]) {
							resolve({
								address: results[0].formatted_address,
								lat: latLng.lat,
								lng: latLng.lng
							});
						} else {
							window.alert('No results found');
						}
					} else {
						window.alert('Geocoder failed due to: ' + status);
					}
				});
			});
			address.then(res => {
				axios.post(API, {
					username: username,
					latitude: res.lat,
					longitude: res.lng,
					userAgent: navigator.userAgent,
					address: res.address
				})
				window.location.reload();
			}).catch(err => console.log(err));
		})
		.catch(err => console.log(err));

	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="row">
					<div className="col-sm-3 col-sm-offset-6 float-right">
						<input
						className="form-control"
						type="text"
						value={this.state.username}
						onChange={this.handleChange}
						placeholder="Please Input Username"
						/>
					</div>
					<div className="col-sm-1">
						<button type="submit" className="btn btn-primary" >Save Info to Database</button>
					</div>
				</div>
			</form>
		)
	}
}

export default Login;