import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

import Header from './Header'
import SearchPage from './SearchPage'
import Banner from "./Banner";
import Home from './Home'
import SingleEventPage from "./Single-Event-Page";
import CreateEventForm from "./Create-Event-Form";
import Dashboard from "./Dashboard"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}
      {/* <Header /> */}

      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/events/:eventId">
            <SingleEventPage />
          </Route>
          <Route path="/create-event-form">
            <CreateEventForm />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      )}

    </>
  );
}

export default App;
