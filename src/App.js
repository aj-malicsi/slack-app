import React from "react";
import {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import RegistrationForm from "./components/Registration/RegistrationForm";

function App() {
  const [loggedIn, setLoggedIn] = useState("")

  
  return (
    //router
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="min-h-screen flex items-center justify-center bg-gray-600">
            <LoginForm />
          </div>
        </Route>
        <Route path="/RegistrationForm">
          <div className="min-h-screen flex items-center justify-center bg-gray-600">
            <RegistrationForm />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
