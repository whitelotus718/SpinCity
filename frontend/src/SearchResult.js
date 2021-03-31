import React from 'react';
import './SearchResult.css';

function SearchResult({
    img,
    location,
    title,
    description,
    musicType,
    star,
    price,
    total,
}) {
    return (
        <div className='searchResult'>
            <img src={img} alt="" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{musicType}</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        {/* <p>{total}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
