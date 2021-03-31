import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
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
            
            <Link to='/users/:id'>
                <div className='header__right'>
                    <p>Profile</p>
                </div>
            </Link>
        </div>
    )
}

export default Header
