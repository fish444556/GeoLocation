import React from 'react';
import GoogleMap from './GoogleMap';

import './DataItem.css';

export default (props) => {
	const { _id, username, userAgent, time, address} = props.data;
	return (
		<li key={_id} className="list-group-item">
			<div className="row">
				<div className="col-sm-3 col-sm-offset-3">
					<p><strong>Username:</strong> {username}</p>
					<p><strong>Device:</strong> {userAgent}</p>
					<p><strong>Time:</strong> {time}</p>
					<p><strong>Address:</strong> {address}</p>
				</div>
				<span className="map-item"><GoogleMap data={props.data} /></span>
			</div>
		</li>
	)
}