import React, { Component } from 'react'

// Class Component

class ClassClick extends Component {

	clickHandler() {
		console.log('Clicked Button')
	}

	render() {
		return (
		<div>
			<button onClick={this.clickHandler}>Click Me</button>
		</div>
		)
	}
}

export default ClassClick