import React from 'react'
import './Dashboard.css'

function Dashboard() {
  
  return (
    <div className="dashboard-container">

      <div className="side-nav">
        <span className="logo"><img src=""></img></span>
        <span className="user-box">
          <img src=""></img>
          <h3>Minhaj Khan</h3>
        </span>
        <ul>
          <li>Dashboard</li>
          <li>Events</li>
          <li>Locations</li>
          <li>Experiences</li>
          <li>Create an Event</li>
        </ul>
      </div>

        <div className="main-display">
          <span className='search-bar'>
            <input type="text" />
          </span>
          <span><img src=""></img></span>
          <ul className="">
            <li>Locations</li>
            <li>Events</li>
            <li>Bids</li>
            <li>Guests</li>
          </ul>
        </div>

        <div className="right-side-display">
          <span>
            <h4>Best places</h4>
            <span><img src=""></img></span>
          </span>
          <span>
            <h4>Best reviews</h4>
            <span><img src=""></img></span>
            <span><img src=""></img></span>
            <span><img src=""></img></span>
          </span>
        </div>

      </div>
    )
}

export default Dashboard