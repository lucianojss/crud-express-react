import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomeContainer, BookContainer } from './containers';
import AppBar from './components/AppBar';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <AppBar children="Javascript Books Directory" />
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/book" component={BookContainer} />
                    <Route exact path="/book/:id" component={BookContainer} />
                </div>
            </Router>
        );
    }
}

export default App;
