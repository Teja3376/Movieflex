// eslint-disable-next-line no-unused-vars
import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='header'>
        <div className='headerLeft'>
            <Link to='/movies/popular' style={{textDecoration: 'none'}}><span>Popular</span></Link>
            <Link to='/movies/top_rated' style={{textDecoration: 'none'}}><span>TopRated</span></Link>
            <Link to='/movies/upcoming' style={{textDecoration: 'none'}}><span>Upcoming</span></Link>
        </div>
        

    </div>
  )
}

export default Nav