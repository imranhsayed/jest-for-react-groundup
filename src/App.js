import React from 'react';
import LoginForm from "./components/login-form";

class App extends React.Component {

	render() {
		return(
			<div className="said">
				This is App.js
				<LoginForm/>
			</div>
		);
	}
}

export default App