import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './styles/index.scss'


const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

window.React = React
window.ReactDOM  = ReactDOM
