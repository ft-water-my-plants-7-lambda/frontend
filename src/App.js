import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Plants from "./components/Plants/Dashboard/PlantList";
import Plant from './components/Plants/Dashboard/Plant'
import AddPlants from "./components/Plants/AddPlants";
import EditPlants from "./components/Plants/EditPlants";
import Register from "./components/Register";
import Login from "./components/Login";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact path='/plants' component={Plants} />
          <Route path='/plants/:id' component={Plant} />
          <Route path='/plants/:id/edit' component={EditPlants} />
          <PrivateRoute exat path='/plants/add' component={AddPlants} />
        </Switch>
      </Router>
    </>
  );
}
