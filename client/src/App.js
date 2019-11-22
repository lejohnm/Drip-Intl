import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Product from './components/Products/Products';
import Contact from './components/Contact/Contact';
import Admin from './components/Login/logout'
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Login from './components/Login/login';
import Logout from './components/Login/logout';
import Signup from './components/Login/signUp';
import httpClient from './httpClient'

class App extends React.Component {
	state = { currentUser: httpClient.getCurrentUser() }

	onLoginSuccess(user) {
		this.setState({ currentUser: httpClient.getCurrentUser() })
	}

	logOut() {
		httpClient.logOut()
		this.setState({ currentUser: null })
	}

	render() {
		const { currentUser } = this.state
  return (
    <Router>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Product} />
        <Route path='/contact' component={Contact} />
        <Switch>

<Route path="/login" render={(props) => {
  return <Login {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
}} />

<Route path="/logout" render={(props) => {
  return <Logout onLogOut={this.logOut.bind(this)} />
}} />

{/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
<Route path="/signup" render={(props) => {
  return <Signup {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
}} />

<Route path="/" render={() => {
  return currentUser
    ? <Home />
    : <Redirect to="/login" />
}} />

<Route path="/" component={Home} />

</Switch>
    </ Router>
  );
}
}
export default App;
