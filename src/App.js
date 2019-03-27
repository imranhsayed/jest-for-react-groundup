import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: ""
		};
	}

	handleClickEvent = ( event ) =>{
		this.setState({ name: 'Kiran' })
	};

	render() {
		return(
			<div className="said">
				<button onClick={this.handleClickEvent} >Click me</button>
				<h2>My App Component</h2>
				<p>{ this.state.name && this.state.name }</p>
			</div>
		);
	}
}

export default App