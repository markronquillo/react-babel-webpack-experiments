import React from 'react';


export default class Title extends React.Component {
	render() {
		return (
			<h1> This is my {this.props.name} </h1>
		)
	}
}