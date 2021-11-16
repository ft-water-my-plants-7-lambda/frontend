import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Navbar from './components/Navbar';

// pages

// auth
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LogoutPage from './pages/LogoutPage';
import UserPage from './pages/UserPage';

// plants
import PlantsPage from './pages/PlantsPage';
import PlantPage from './pages/PlantPage';
import EditPlantPage from './pages/EditPlantPage';
import AddPlantPage from './pages/AddPlantPage';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <PrivateRoute path='/logout' component={LogoutPage} />
          <PrivateRoute path='/user' component={UserPage} />
          <PrivateRoute exact path='/plants' component={PlantsPage} />
          <PrivateRoute exact path='/plants/add' component={AddPlantPage} />
          <PrivateRoute exact path='/plants/:id' component={PlantPage} />
          <PrivateRoute
            exact
            path='/plants/:id/edit'
            component={EditPlantPage}
          />
        </Switch>
      </Router>
    </>
  );
}
