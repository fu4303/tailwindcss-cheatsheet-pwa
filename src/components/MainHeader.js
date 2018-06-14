import React, { Component } from 'react';

export default class MainHeader extends Component {
	render() {
		return (
			<header className="flex items-center p-2 bg-green-lightest">
				<h2 className="text-blue-dark">TailWindCSS</h2>
				<span className="ml-4 font-bold text-grey-darker">CHEAT SHEET</span>
			</header>
		);
	}
}
