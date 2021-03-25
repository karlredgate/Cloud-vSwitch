import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Entry from './components/Entry';
import Connect from './components/Connect';

require('dotenv').config();

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/connect" component={Connect} />
        <Route path="/" component={Entry} />
      </Switch>
    </Router>
  );
}
