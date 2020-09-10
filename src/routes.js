import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import { Results } from './pages/Result';


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/results" component={Results} />
      <Redirect to="/" />
    </BrowserRouter>
  )
}

export default Routes;