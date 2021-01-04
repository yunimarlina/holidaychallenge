import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './header'
import Listtodos from './listtodos';
import AddTodo from './AddTodo'
import EditTodo from './EditTodo'
ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Header/>
      <Route path='/' exact component={Listtodos} />
      <Route path='/add' component={AddTodo} />
      <Route path='/edit/:id' component={EditTodo} />
    </BrowserRouter>
 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
