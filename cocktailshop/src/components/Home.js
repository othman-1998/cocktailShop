import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <>
      <div className='homeContainer'>

        <div className='hero'>
          <button>
            <Link to="/buy">Discover Cocktails</Link>
          </button>
        </div>

      </div>
    </>

  )
}
