import React from "react";
import {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import RegistrationForm from "./components/Registration/RegistrationForm";
import MainPage from "./components/Channels/MainPage";

function App() {
  const [loggedIn, setLoggedIn] = useState("")
  const [headers, setHeaders] = useState({})


  // console.log("app check", loggedIn)
  // console.log("headers app check",headers)

  
  return (
    //router
    <Router>
      <Switch>

        <Route exact path="/">
          <div className="min-h-screen flex items-center justify-center bg-gray-600">
            <LoginForm 
            loggedIn={loggedIn} 
            setLoggedIn={setLoggedIn}
            headers={headers}
            setHeaders={setHeaders}
            />
          </div>
        </Route>

        <Route path="/RegistrationForm">
          <div className="min-h-screen flex items-center justify-center bg-gray-600">
            <RegistrationForm />
          </div>
        </Route>

        <Route
          exact
          path="/main-page"
          component={() => {
            return (
              <MainPage
                loggedIn={loggedIn}
                headers={headers}
              />
            )
          }}
        />

        

      </Switch>
    </Router>
  );
}

export default App;
