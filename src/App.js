import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute path='/plants' component={Plants} />
          <PrivateRoute path='/plants/add' component={AddPlants} />
          <PrivateRoute path='/plants/:id' component={Plant} />
          <Route exact path="/" component={LandingPage} />
        </Switch> */}
      </Router>
    </>
  )
}
