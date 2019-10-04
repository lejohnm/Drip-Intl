import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Product from './components/Products/Products'
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Product} />
        <Route path='/contact' component={Contact} />
    </ Router>
  );
}

export default App;
