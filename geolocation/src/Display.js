import React, { Component } from 'react';
import axios from 'axios';

import DataItem from './DataItem';

class Display extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
		this.renderList = this.renderList.bind(this);
	}

	componentDidMount() {
		const URL = "http://127.0.0.1:8088/user/";
		axios.get(URL).then((data) => {
			this.setState({
				data: data.data.reverse()
			})
		});
	}

	renderList() {
		if (this.state.data.length === 0) {
			return <div>Loading</div>
		}
		debugger
		return this.state.data.map(ele => {
			return (
				<DataItem data={ele}/>
			);
		});
	}

	render() {
		console.log(this.state.data);
		return (
			<div>
				{this.renderList()}
			</div>
		);
	}
}

export default Display;