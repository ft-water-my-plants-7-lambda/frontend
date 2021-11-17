import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Navbar from './components/Navbar';

import { connect } from 'react-redux';
import { handleInit } from './lib/actions/handleInit';

// pages

// auth
import axiosWithAuth from './utils/axiosWithAuth';

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

const App = ({ handleInit, isAuthenticated }) => {
  useEffect(() => handleInit(), [handleInit]);

  const [plants, setPlants] = useState([]);

  useEffect(() => {
    if (!plants.length && isAuthenticated) {
      axiosWithAuth()
        .get('/plants')
        .then((res) => {
          setPlants(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [plants, isAuthenticated]);

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
          <Route exact path='/plants'>
            <PlantsPage plants={plants} />
          </Route>
          <Route exact path='/plants/add'>
            <AddPlantPage setPlants={setPlants} />
          </Route>
          <Route exact path='/plants/:id'>
            <PlantPage plants={plants} setPlants={setPlants} />
          </Route>
          <Route exact path='/plants/edit/:id'>
            <EditPlantPage setPlants={setPlants} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
  };
};

export default connect(mapStateToProps, { handleInit })(App);
