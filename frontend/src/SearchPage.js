import { Events } from 'pg';
import React from 'react';
import './SearchPage.css';
// import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";


// const events = Events.findAll()   querying backend database for ALL events. forEach 
// events.forEach(event) {
//     <SearchResult 
//         img=event.img
//     />
// }

function SearchPage() {
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
            <SearchResult
                img="https://i.ibb.co/wyVMrKr/Search-Result-1-party-at-rooftop.jpg"
                location="Party at Rooftop"
                title="Celebrating Minhaj's 27th Birthday"
                musicType="House"
                description="125 guests"
                star={4.73}
                price="$1000"
            />

            <SearchResult
                img="https://i.ibb.co/wyyjLnp/Search-Result-2-wedding-at-field.jpg"
                location="Wedding at Field"
                title="Celebrating the love of our favorite couple"
                musicType="Ambient"
                description="100 guests"
                star={4.5}
                price="$800"
            />

        </div>
    )
}

export default SearchPage
