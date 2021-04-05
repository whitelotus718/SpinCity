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
import SingleEventPage from "./Single-Event-Page";
import CreateEventForm from "./Create-Event-Form";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  const [eventType, setEventType] = useState("Dance Party");
  const [venueType, setVenueType] = useState('Bar');
  const [musicType, setMusicType] = useState('Electronic');
  const [title, setTitle] = useState("Kickstart your weekend with our electronic dance party!")
  const [address, setAddress] = useState('200 Bowrey');
  const [size, setSize] = useState(100);
  const [price, setPrice] = useState(1200);
  const [description, setDescription] = useState('This is gonna be a really wild party guys!');
  const [venueImage, setVenueImage] = useState('https://i.ibb.co/KrnF0r8/Bowrey-Image.jpg');

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
          <Route path="/events/1">
            <SingleEventPage title={title} musicType={musicType} title={title} address={address} size={size} price={price} description={description} venueImage={venueImage} eventType={eventType}/>
          </Route>
          <Route path="/create-event-form">
            <CreateEventForm />
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
