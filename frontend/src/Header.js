import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

function Header() {

    const history = useHistory();

    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.ibb.co/0tJ3FjF/oxillary.png"
                    alt=""
                />
            </Link>
           
            <div className='header__center'>
                <input type="text" />
            </div>
            
            <Link to='/create-event-form'>
                <div className='header__right'>
                    <button onClick={() => history.push('/events/1')}>Create an Event</button>
                </div>
            </Link>
        </div>
    )
}

export default Header
