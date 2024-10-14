import React from 'react'
import { computerData } from '../data/compouters'
import { Link } from 'react-router-dom'


const Computers = () => {
    const slicecomputers = computerData.slice(0,5)
  return (
    <>
    <Link  to="/computers"style={{textDecoration:"none",color:"green",fontWeight:"bold"}}>
    <h1 style={{textAlign:"center"}}>Computers</h1>
    <div className='navbar-items-home-page'>
        {slicecomputers.map((each)=>{
            return (
                <div>
                    <img alt="computers" src={each.image}/>
                </div>
            )
        })}
      
    </div>
    </Link>
    </>
  )
}

export default Computers
