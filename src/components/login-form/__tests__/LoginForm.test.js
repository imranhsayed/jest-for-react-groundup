import LoginForm from '../index';
import React from 'react';
import ReactDOM from 'react-dom';

test( 'calls onSubmit with name and designation when submitted', () => {

	const container = document.createElement( 'div' );
	ReactDOM.render( <LoginForm/>, container );

	const form = container.querySelector( 'form' );

	// Pull out the input elements with name as 'name' and 'designation' resp.
	const { name, designation } = form.elements;

	// Set the values for the inputs name and designation
	name.value = 'Imran';
	designation.value = 'Web Engineer';

	// Submit the form using the below function.
	const submit = new window.Event( 'submit' );
	form.dispatchEvent( submit );

} );