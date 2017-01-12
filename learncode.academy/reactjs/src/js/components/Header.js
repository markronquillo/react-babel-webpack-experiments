import React from 'react';

import Title from './Title.js';

export default class Header extends React.Component {

	constructor() {
		super();
		this.state = {
			name: "Mark Jospeh"
		};
	}

	render() {

		setTimeout(() => this.setState({'name':'title'}), 2000);
		return (
			<Title name={this.state.name} />
		)
	}
}