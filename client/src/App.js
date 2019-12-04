import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Product from './components/Products/Products';
import Contact from './components/Contact/Contact';
import { Route, BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {
	

	render() {
		
  return (
    <Router>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Product} />
        <Route path='/contact' component={Contact} />
    </ Router>
  ); 
}
}
export default App;
