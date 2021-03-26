import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import Card from './Card.js'
import App from './App.js';
import { robots } from './robots';
import 'tachyons';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
      <App robots={robots} />,
     document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
