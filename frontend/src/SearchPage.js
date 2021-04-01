import { Events } from 'pg';
import React from 'react';
import './SearchPage.css';
// import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import { getEvents } from './store/events';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


function SearchPage() {
    
    const dispatch = useDispatch();

    
    
    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);
    
    const events = useSelector(state => state.events);
    console.log("HERE ARE THE EVENTS OBJECT!!!!", events)
    console.log('FIRST EVENT OBJECT!!!!', events[1])
    console.log('SECOND EVENT OBJECT!!!!', events[2])
    // const events = useSelector(state => {
    //     return state.events.list.map(eventId => state.events[eventId]);
    //   });
    
    
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>2 events · 18 august · ~100 guests</p>
                <h1>Stays nearby</h1>
                <button variant="outlined">Genre</button>
                <button variant="outlined">Venue Type</button>
                <button variant="outlined">Event Type</button>
                <button variant="outlined">Price</button>
                <button variant="outlined">Location</button>
            </div>

            {events.events.map((event) => {
                return (
                    <SearchResult key={event.id}
                    img={event.venueImage}
                    location={event.address}
                    title={event.title}
                    musicType={event.musicType}
                    description={event.description}
                    price={event.price}
                    />
                )
            })}

        <SearchResult
            img="https://i.ibb.co/wyVMrKr/Search-Result-1-party-at-rooftop.jpg"
            location="Party at Rooftop"
            title="Celebrating Minhaj's 27th Birthday"
            musicType="House"
            description="125 guests"
            star={4.73}
            price="1000"
        />
        </div>
    )
}

export default SearchPage



