import React, { Component } from 'react';import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/Home';
import People from './components/People'
import Pricing from './components/Pricing';
import About from './components/About';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';
import ParentComponent from './components/AccordionFinal'

class App extends Component {
  render() {
    return (
        <div className="Apps">
        <Router>
            <div>
            <Navbar/>
            <Redirect from="/" to="/Home"/>
            <Switch>
            <Route exact path="/Home"component={Home}/>
            <Route path="/People"component={People}/>
            <Route path="/Pricing"component={Pricing}/>
            <Route path="/About"component={About}/>
            </Switch>
            </div>
          </Router>
          <ParentComponent />
          <Footer />
      </div>
    );
  }
}

export default App;
