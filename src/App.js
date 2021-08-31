<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import RegistrationForm from "./components/registration/RegistrationForm";

function App() {
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
=======
import logo from './logo.svg';
import RegisterForm from './components/registration/RegisterForm';
import LoginForm from './components/Login/LoginForm';


function App() {
  return (
    <>

    <RegisterForm/>

    <LoginForm/>
    </>
>>>>>>> 7f091941c4c0b627e7a1570b38bc3e6ad3a052f9
  );
}

export default App;
