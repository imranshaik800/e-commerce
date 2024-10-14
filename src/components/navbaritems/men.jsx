import React from 'react'
import { menData } from '../data/men'
import { Link } from 'react-router-dom'

const Men = () => {

    const getfiveimages = menData.slice(0,5)
  return (
    <>
    <Link to="/men"style={{textDecoration:"none",color:"green",fontWeight:"bold"}}>
    <h1 style={{textAlign:"center"}}>Mens</h1>
    <div className='navbar-items-home-page'>
        {getfiveimages.map((each) => {
            return (
                <img alt="men" src={each.image}/>
            )
        })}

      
    </div>
    </Link>
    </>
  )
}

export default Men
