import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='nav'>
        <Link to="/" className='site-title'>Cocktails</Link>
            <ul>
                <li>
                    <Link to='/buy' >Buy</Link>
                </li>
                <li>
                    <Link to='/Basket' >Basket</Link>
                </li>
            </ul>
    </nav>
  )
}
