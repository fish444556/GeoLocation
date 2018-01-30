import React, { Component } from 'react';
// import GoogleMapReact from 'react-google-maps';

import './DataItem.css';

class GoogleMap extends Component {
	componentDidMount() {

		const { latitude, longitude, address } = this.props.data;
		const google = window.google;
		const map = new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: latitude,
				lng: longitude
			}
		});
		const latlng = {lat: latitude, lng: longitude};
		const marker = new google.maps.Marker({
      position: latlng,
      map: map
    });
		const infowindow = new google.maps.InfoWindow;
    infowindow.setContent(address);
    infowindow.open(map, marker);
	}

	render() {
		return (
			<div ref="map" className="map-item"/>
		);
	}

}

export default GoogleMap;