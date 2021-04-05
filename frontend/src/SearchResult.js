import React from 'react';
import './SearchResult.css';
import { useHistory } from 'react-router-dom';

function SearchResult({
    img,
    location,
    title,
    description,
    musicType,
    star,
    price,
    eventType,
    eventId
}) {

    const history = useHistory();

    return (
        <div className='searchResult'>
            <img src={img} alt="" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <h3>{title}</h3>
                    <p>{musicType} ♫</p>
                    <p>{eventType}</p>
                    <p>____</p>
                    <p>{location}</p>
                    {/* <p>{description}</p> */}
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>${price}</h2>
                        {/* <p>{total}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
