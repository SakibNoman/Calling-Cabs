import React from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Destination from "./Components/Destination/Destination";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from "./Components/Login/Login";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home" >
          <Home></Home>
        </Route>
        <Route path="/login" >
          <Login></Login>
        </Route>
        <Route path="/destination/:vehicle" >
          <Destination></Destination>
        </Route>
        <Route path="/" >
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
