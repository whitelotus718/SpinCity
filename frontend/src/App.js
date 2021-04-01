import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

import Header from './Header'
import SearchPage from './SearchPage'
import Banner from "./Banner";
import Home from './Home'


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Header />

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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      )}


        <div>
          <h1>Spin City</h1>
        </div>
        <div>
          <h1>Explore Nearby</h1>
        </div>
        <div>
          <h1>Live Anywhere</h1>
        </div>
        <div>
          <h1>Become a Host</h1>
        </div>
        <div>
          <h1>Discover Experiences</h1>
        </div>


    </>
  );
}

export default App;
