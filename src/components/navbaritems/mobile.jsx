import { mobileData } from "../data/mobiles";
import { Link } from "react-router-dom";
import React from 'react'

const mobile = () => {
  const getfivemobiles = mobileData.slice(0,5)
  return (
    <>
    <Link to="/mobiles"style={{textDecoration:"none",color:"green",fontWeight:"bold"}}>
    <h1 style={{textAlign:"center"}}> Mobiles</h1>
    <div className="navbar-items-home-page">
     
      {getfivemobiles.map((each)=> {
        return (
          <div>
            <img alt="mobiles" src={each.image}/>
          </div>
        )
      })}
      
    </div>
    </Link>
    </>
  )
}

export default mobile
