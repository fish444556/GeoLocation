import React, { Component } from 'react';
// import GoogleMapReact from 'react-google-maps';

import './DataItem.css';

class GoogleMap extends Component {
	componentDidMount() {

		const { latitude, longitude } = this.props.data;
		const google = window.google;
		debugger
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: latitude,
				lng: longitude
			}
		});
	}

	render() {
		// debugger
		return (
			<div ref="map" className="map-item"/>
		);
	}

}

export default GoogleMap;