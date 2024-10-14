import React from 'react'
import { speakerData } from '../data/speaker'
import { Link } from 'react-router-dom'

const speakers = () => {
    const getfivespeakers = speakerData.slice(0,5)
  return (
    <>
    <Link to="/speakers" style={{textDecoration:"none",color:"green",fontWeight:"bold"}}>
    <h1 style={{textAlign:"center"}}>Speakers</h1>
    <div className='navbar-items-home-page'>
     

        {getfivespeakers.map((each)=>{
            return (
                <div>
                    <img alt="speakers" src={each.image}/>
                </div>
            )
        })}
    </div>
    </Link>
    </>
  )
}

export default speakers
