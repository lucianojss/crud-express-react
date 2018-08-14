import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomeContainer, BookContainer} from './containers';
import AppBar from './components/app-bar';

console.log(HomeContainer);

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <AppBar children="Javascript Books Directory"></AppBar>
        <ul>
          <li>
            <Link to="/">List Books</Link>
          </li>
          <li>
            <Link to="/book">New Book</Link>
          </li>
        </ul>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/book" component={BookContainer} />
      </div>
    </Router>
    );
  }
}

export default App;
