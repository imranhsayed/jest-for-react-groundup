import React from 'react';

class LoginForm extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			name: '',
			designation: ''
		}
	}

	handleFormSubmit = ( event ) => {
		event.preventDefault();
		console.log( 'form Submitted' );
	};

	handleInputChange = ( event ) => {
		event.preventDefault();
		console.log( 'came' );
		this.setState( { [ event.target.name ]: event.target.value } );
	};

	render() {
		return(
			<form onSubmit={this.handleFormSubmit}>
				<label htmlFor="name">
					Name:
					<input type="text" id="name" name="name" onChange={this.handleInputChange}/>
				</label>
				<label htmlFor="designation">
					Designation
					<input type="text" id="designation" name="designation" onChange={this.handleInputChange}/>
				</label>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default LoginForm;