import './App.css';
import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/index'
import Header from './components/header'
import Todos from './pages/Todos';
import AddTodo from './components/AddTodo'
import EditTodo from './components/EditTodo'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path='/' exact component={Todos} />
            <Route path='/add' component={AddTodo} />
            <Route path='/edit/:id' component={EditTodo} />

          </Switch>
          
          </BrowserRouter>

      </Provider>
     
    </div>
  );
}

export default App;
