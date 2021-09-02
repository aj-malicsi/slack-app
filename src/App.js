import React from "react";
import {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import RegistrationForm from "./components/Registration/RegistrationForm";
import MainPage from "./components/Channels/MainPage";

function App() {
  const [loggedIn, setLoggedIn] = useState("")

  useEffect(()=>{
    localStorage.setItem('loggedIn', loggedIn)

    setLoggedIn(localStorage.getItem('loggedIn'))
    console.log("use effect check", loggedIn)

  },[loggedIn])


  console.log("app check", loggedIn)

  
  return (
    //router
    <Router>
      <Switch>

        <Route exact path="/">
          <div className="min-h-screen flex items-center justify-center bg-gray-600">
            <LoginForm 
            loggedIn={loggedIn} 
            setLoggedIn={setLoggedIn}/>
          </div>
        </Route>

        <Route path="/RegistrationForm">
          <div className="min-h-screen flex items-center justify-center bg-gray-600">
            <RegistrationForm />
          </div>
        </Route>

        <Route 
        exact path="/main-page" 
        component={MainPage}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        />

        

      </Switch>
    </Router>
  );
}

export default App;
