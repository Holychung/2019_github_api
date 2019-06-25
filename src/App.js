import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import SearchPage from './Pages/SearchPage'
import NavBar from './Components/NavBar'

const HomePage = () => <div>Hello World!</div>
const NotFound = () => <div>404 Error!</div>

class App extends React.Component {
  render(){
    return(
      <div>
        <BrowserRouter>
          <Route path='/' component={NavBar} />          
          <Switch>
            <Route exact path='/' component={ HomePage }/>
            <Route path='/search' component={ SearchPage }/>
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
