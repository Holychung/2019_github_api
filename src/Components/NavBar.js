import React from 'react';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


class NavBar extends React.Component {
  render(){
    return(
      <div className="container">
        <div className="row justify-content-center m-3">
          <Link to='/' className="mx-3">Home</Link> 
          <Link to='/search'>Search</Link> 
        </div>
      </div>
    )
  }
}

export default NavBar;
