import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

var app = <App data={window.data}/>;
ReactDOM.render(app, document.getElementById('app'));
