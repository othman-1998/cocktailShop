import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <>
      <div className='homeContainer'>

        <div className='hero'>
          <h3>DIT DAGLIGE BOOST LEVERET LIGE TIL DØREN? <br></br>VI TILBYDER GRATIS LEVERING I STORKØBENHAVN OG OMEGN</h3>
          <button>
            <Link to="/buy">Shop her</Link>
          </button>
        </div>

      </div>
    </>

  )
}
