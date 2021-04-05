import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getBids } from './store/bids';

// do query where Bids.findAll(where bid.eventId === event.id)


function SingleEventPage({
    title,
    address,
    venueImage,
    description,
    size,
    musicType,
    eventType,
    venueType,
    price,
}) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBids());
    }, [dispatch]);
    
    const bids = useSelector(state => state.bids);
    console.log(bids)
    // const handleOnClick = (e) => {
    //     e.preventDefault();
    //     // should be passing in userId like so: createBid(userId)
    //     const bid = dispatch(createBid());
    // };

    return (

        <div className="singleEventPage">
            <div className="singleEventPage-title">
                <h2>{title}</h2>
                <h3>{address}</h3>
            </div>

            <div className="singleEventPage-image">
                <img src={venueImage} />
            </div>

            <div className="singleEventPage-body">
                <h2>{description}</h2>
                <h2>{musicType}</h2>
                <h2>{eventType}</h2>
                <h2>{venueType}</h2>
                <h2>${price}</h2>
                <h2>{size} guests</h2>
            </div>

            <div className="singleEventPage-bids">
                <h2>________</h2>
                <h2>Bids</h2>

                <ul>
                    {bids.bids.map((bid) => {
                        return (
                            <li key={bid.id}>{bid.date}</li>
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
