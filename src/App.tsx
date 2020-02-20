import React from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './Menu';
import Home from './components/Home';
import List from './components/List';
import Member from './components/Member';


function App() {
  return (
    <Router>
    <Menu />
      <Route exact path="/" component={Home}></Route>
      <Route  path="/member" component={Member}></Route>
      <Route  path="/list" component={List}></Route>
      <Route  path="/contact" component={() => <div>Contact</div>}></Route>
    </Router>
  );
}

export default App;
