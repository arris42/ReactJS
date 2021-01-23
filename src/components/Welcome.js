import React, { Component } from 'react'

// Class Component

class Welcome extends Component {
	render() {
		// Props
		const {name, heroName} = this.props

		// State
		// const {state1, state2} = this.state
		return (
		<h2>
			Welcome {name} a.k.a {heroName}
		</h2>
		)
	}
}

export default Welcome