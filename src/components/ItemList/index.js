import React from 'react';
import styles from '../../Home.css';

const ItemList = ( { items } ) => {
	console.log( 'items', items );
	localStorage.setItem( 'myname', 'Imran' );
	console.log( localStorage.getItem( 'myname' ) );

	return items.length ? (
		<ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
	) : (
		'no items'
	)
};

export default ItemList