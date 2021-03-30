import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
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
