import React from 'react'

const Hello = () => {

	// With JSX Library

	// return (
	// 	<div className='dummyClass'>
	// 		<h2>Veesh</h2>
	// 	</div>
	// )


	// Without JSX Library

	return React.createElement(
		'div',
		{ id: 'hello', className: 'dummyClass' },
		React.createElement('h1', null, 'Veeshwash'))
}

export default Hello