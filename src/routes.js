import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Results } from './pages/Result';


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/results" component={Results} />
    </BrowserRouter>
  )
}

export default Routes;