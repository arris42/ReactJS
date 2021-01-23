import React from "react"

// Functional Component

// function Greet() {
// 	return <h1>Veesh</h1>
// }

// props = "properties" <= parameter name

export const Greet = props => {
	const {name, heroName} = props
	return (
		<div>
			<h2>Hello {name} a.k.a {heroName}</h2>
		</div>
	)
}

export default Greet