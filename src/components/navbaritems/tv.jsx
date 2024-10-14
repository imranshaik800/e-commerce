import React from 'react'
import { tvData } from '../data/tv'
import { Link } from 'react-router-dom'
const Tv = () => {
    const getfivetv = tvData.slice(0,5)
  return (
    <>
    <Link to="/tv"style={{textDecoration:"none",color:"green",fontWeight:"bold"}}>
    <h1 style={{textAlign:"center"}}>Tv</h1>
    <div className='navbar-items-home-page'>
        
        {getfivetv.map((each)=> {
            return (
                <div>
                    <img alt="tv" src={each.image}/>
                </div>
            )
        })}
    </div>
    </Link>
    </>
  )
}

export default Tv
