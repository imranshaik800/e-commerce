import { acData } from "../data/ac";
import {Link} from "react-router-dom"

import React from 'react'

const Ac = () => {
    const spliceItems = acData.slice(0,5)
  return (
    <>
    <Link to="/ac" style={{textDecoration:"none",color:"green",fontWeight:"bold"}}>
    <h1 style={{textAlign:"center"}}>AC</h1> 
    <div className="navbar-items-home-page">
     
        {spliceItems.map((each)=>{
            return (
                <div>
                    <img alt="ac" src={each.image}/>
                </div>
            )
        })} 
    </div>
    </Link>
    </>
  )
}

export default Ac
