import Home from "./Pages/Home/home";
import Topbar from "./Components/Topbar/topbar";
import Mainpage from "./Components/MainPage/mainpage";
import Login from "./Pages/Login/login";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./Pages/Register/register";
import { useState, useEffect } from "react";
import Auth from "./Components/AuthApp/auth";
import { useHistory } from "react-router-dom";
import jwtDecoded from "jwt-decode";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Register />
        </Route>
        {/* <Route path="/Register">
          <R/>
        </Route> */}
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/MainPage">
          <Mainpage />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;