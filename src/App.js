import React from 'react';
import { BrowserRouter as Router ,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from "./components/navbar.component";
import Donation from './components/donation.conponent';
import About from './components/about.component';
import Contact from './components/contact.component';
import HomePage from './components/homepage.component';


function App() {
  return (
    <Router>
    <div className="container">
    <Nav />
    <br/>
      <Route path="/" exact component={HomePage}/>
      <Route path="/donate" exact component={Donation}/>
      <Route path="/create" exact component={Contact}/>
      <Route path="/user" exact component={About}/>
    </div>
    </Router>
  );
}

export default App;
