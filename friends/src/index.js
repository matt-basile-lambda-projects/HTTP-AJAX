import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {withRouter, BrowserRouter as Router} from 'react-router-dom';

const AppWithRouter = withRouter(App);

ReactDOM.render(
<Router>
<AppWithRouter />
</Router>, document.getElementById('root'));

