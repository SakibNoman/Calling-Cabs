import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import Destination from "./Components/Destination/Destination";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home" >
            <Home></Home>
          </Route>
          <Route path="/login" >
            <Login></Login>
          </Route>
          <PrivateRoute path="/destination/:vehicle" >
            <Destination></Destination>
          </PrivateRoute>
          <Route path="/" >
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
