import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Plants from "./components/Plants/Dashboard";
import AddPlants from "./components/Plants/AddPlants";
import Register from "./components/Register";
import Login from "./components/Login";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Register />
        <Login />
        <Switch>
          {/* <Route exact path="/" component={LandingPage} /> */}
          {/* <Route path="/register" component={Register} /> */}
          {/* <Route path="/login" component={Login} /> */}
          <PrivateRoute path="/plants" component={Plants} />
          <PrivateRoute path="/plants/add" component={AddPlants} />
          {/* <PrivateRoute path='/plants/:id' component={Plant} /> */}
        </Switch>
      </Router>
    </>
  );
}
