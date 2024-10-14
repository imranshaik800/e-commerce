import React from 'react'
import { womanData } from '../data/women'
import {Link} from "react-router-dom"
const Women = () => {

    const getfivewomendata = womanData.slice(0,5)

  return (
    <>
    <Link to="/women" style={{textDecoration:"none",color:"green",fontWeight:"bold"}}>
    <h1 style={{textAlign:"center"}}>Women</h1>
    <div className='navbar-items-home-page'>
        {getfivewomendata.map((each)=> {
            return (
                <div>
                    <img alt="women" src={each.image}/>
                </div>
            )
        })}
      
    </div>
    </Link>
    </>
  )
}

export default Women
