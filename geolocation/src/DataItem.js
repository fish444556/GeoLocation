import React, { Component } from 'react';
import GoogleMap from './GoogleMap';

import './DataItem.css';

export default (props) => {
	const { _id, username, userAgent} = props.data;
	debugger
	return (
		<li key={_id} className="list-group-item">
			<div className="row">
				<div className="col-sm-3">
					<h3>{username}</h3>
					<p> {userAgent}</p>
				</div>
				<span className="map-item"><GoogleMap data={props.data} /></span>
			</div>
		</li>
	)
}