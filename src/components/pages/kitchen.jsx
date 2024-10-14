import { kitchenData } from '../data/kitchen'
import {Link} from "react-router-dom"

import React, { useState } from 'react'

const Kitchen = () => {
    const [filterkitchendata,setFilterkitchendata] = useState([])

    const filterkitchencheckbtn = (eachbrand) => {
        if (filterkitchendata.includes(eachbrand)){
            setFilterkitchendata(filterkitchendata.filter((each) => each !== eachbrand))
        } else {
            setFilterkitchendata([...filterkitchendata,eachbrand])
        }
    }

    const getfilterkitchendata = filterkitchendata.length === 0 ? kitchenData : kitchenData.filter((eachbrand)=> filterkitchendata.includes(eachbrand.brand))

   return (
    <div className="filter-products">
        <div className="filter-products-column">
        {kitchenData.map((each)=>{
            return (
                <div style={{padding:"8px"}}>
                    <label style={{cursor:"pointer"}}>
                        <input style={{marginRight:"10px",cursor:"pointer"}} type="checkbox" checked={filterkitchendata.includes(each.brand)} onChange={() => filterkitchencheckbtn(each.brand)}/>
                        {each.brand}
                    </label>
                </div>
            )
        })}
        </div>
        {getfilterkitchendata.map((each)=> {
            return (
                <div className='all-products'>
                    <Link to={`/detail-page-kitchens/${each.id}`} style={{textDecoration:"none",fontWeight:"bold",color:"black"}}>
                    <img alt="ac" src={each.image} style={{width:"280px",borderRadius:"10px"}}/>
                    <h1>{each.product}</h1>
                    <p>{each.company}</p>
                    <p>{each.model}</p>
                    <p>{each.price}</p>
                    <p>{each.category}</p>
                    <p>{each.description}</p>
                    </Link>
                </div>
            )
        })}
      </div>

  )
}

export default Kitchen
