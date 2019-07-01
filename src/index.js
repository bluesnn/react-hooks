import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import Nav from './components/navigation'
import Demo from './views/demo/index';
import Effect from './views/effect/index';
import * as serviceWorker from './serviceWorker';

const App = (
  <Router>
    <Nav />
    <Route exact path="/" component={Demo} />
    <Route path="/effect" component={Effect} />
  </Router>
);

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
