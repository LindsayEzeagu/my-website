import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import './index.css';


ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>, 
  document.getElementById('root')
)

//ReactDOM.render(<App/>, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//   <App />
//   </React.StrictMode>,
// document.getElementById('root')
// );

