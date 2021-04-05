import React from 'react';
import './Single-Event-Page.css';

import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getBids } from './store/bids';

// do query where Bids.findAll(where bid.eventId === event.id)
import { useParams } from 'react-router-dom';
import { getEvents } from './store/events';


function SingleEventPage({}) {

    const events = useSelector(state => state.events);
    console.log("EVENTS USE SELECTOR WORKS!", events)
    
    const bids = useSelector(state => state.bids);
    console.log("BIDS USE SELECTOR WORKS!", bids)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvents())
        dispatch(getBids());
    }, [dispatch]);
    
    const { eventId } = useParams();
    console.log(eventId)
    // const eventId = 2;

    // const event = events.events.find(event => event.id === eventId);
    const event = events[eventId]
    console.log(event)
    // const handleOnClick = (e) => {
    //     e.preventDefault();
    //     // should be passing in userId like so: createBid(userId)
    //     const bid = dispatch(createBid());
    // };

    return (

        <div className="singleEventPage">
            
            <div className="singleEventPage-title">
                <h2>{event.title}</h2>
                <h3>{event.address}</h3>
            </div>

            <div className="singleEventPage-image">
                <img src={event.venueImage} />
            </div>

            <div className="singleEventPage-body">
                <h3>{event.musicType} · {event.eventType} · {event.venueType} </h3>
                <h2></h2>
                <h2></h2>
                <h2>{event.size} guests</h2>
                <p>{event.description}</p>
                <h2>${event.price}</h2>
            </div>

            <div className="singleEventPage-bids">
                <h2>________</h2>
                <h2>Bids</h2>

                <ul>
                    {bids.bids.map((bid) => {
                        return (
                            <li key={bid.id}>{bid.User}</li>
                        )
                        })}
                </ul>

                    <ul>
                        <li>Zhu</li>
                        <li>Odesza</li>
                    </ul>
                {/* <button onClick={handleOnClick}>Bid</button> */}
            </div>

        </div>
    )
}

export default SingleEventPage
