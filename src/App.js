import react from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Amplify from 'aws-amplify';
// import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// import awsconfig from './aws-exports';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Home from './components/Home';
import Home from './components/Home';
import Header from './components/Header';
import IvasRadio from './components/IvasRadio';
import About from './components/About';
import Three from './components/Three';
import Two from './components/Two';

// Amplify.configure(awsconfig);

function App() {
	return (
		// <Home />
		<>
			{/* <AmplifyAuthenticator> */}
			<Header />
			<Router>
				<Switch>
					<Route path="/Home">
						<Home />
					</Route>
					<Route path="/IvasRadio">
						<IvasRadio />
					</Route>
					<Route path="/About">
						<About />
					</Route>
					<Route path="/Two">
						<Two />
					</Route>
					<Route path="/Three">
						<Three />
					</Route>
				</Switch>
			</Router>
			{/* </AmplifyAuthenticator> */}
		</>
	);
}

export default App;
