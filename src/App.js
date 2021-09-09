import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import RegistrationForm from "./components/Registration/RegistrationForm";
import MainPage from "./components/Channels/MainPage";
import Channel from "./components/Channels/Channel";
import SelectedChannel from "./components/Channels/SelectedChannel";

function App() {
  const [loggedIn, setLoggedIn] = useState("");
  const [headers, setHeaders] = useState({});
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState("");
  const [users, setUsers] = useState([]);

  // console.log("App() =>", loggedIn)
  // console.log("App JS", headers)
  console.log("appChannel", channels);

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
              users={users}
              setUsers={setUsers}
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
                setHeaders={setHeaders}
                channels={channels}
                setChannels={setChannels}
                users={users}
                setUsers={setUsers}
              />
            );
          }}
        />

        <Route
          exact
          path="/channel"
          component={() => {
            return (
              <Channel
                loggedIn={loggedIn}
                headers={headers}
                setHeaders={setHeaders}
                channels={channels}
                selectedChannel={selectedChannel}
                setSelectedChannel={setSelectedChannel}
              />
            );
          }}
        />

        <Route
        exact
        path="/channel/:channelId/:channelName"
        render={(props) => <SelectedChannel 
          {...props}
          loggedIn={loggedIn}
          headers={headers}
          setHeaders={setHeaders}
          channels={channels}
          selectedChannel={selectedChannel}
          setSelectedChannel={setSelectedChannel}
        />}


        />
      </Switch>
    </Router>
  );
}

export default App;
