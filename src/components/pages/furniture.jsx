import { furnitureData } from '../data/furniture'
import {Link} from "react-router-dom"

import React, { useState } from 'react'

const Furniture = () => {
    const [filterfurniture,setFilterfurniture] = useState([])

    const furniturecheckbtn = (eachbrand) => {
        if (filterfurniture.includes(eachbrand)) {
            setFilterfurniture(filterfurniture.filter((each) => each !== eachbrand))
    } else {
        setFilterfurniture([...filterfurniture,eachbrand])
    }
}

const getfilterdata = filterfurniture.length === 0 ? furnitureData : furnitureData.filter((eachbrand) => filterfurniture.includes(eachbrand.brand))

   return (
    <div className="filter-products">
        <div className="filter-products-column">
        {furnitureData.map((each)=>{
            return (
                <div style={{padding:"8px"}}>
                    <label  style={{cursor:"pointer"}}>
                        <input style={{marginRight:"10px",cursor:"pointer"}} type="checkbox" checked={filterfurniture.includes(each.brand)} onChange={() => furniturecheckbtn(each.brand)}/>
                        {each.brand}
                    </label>
                </div>
            )
        })}
        </div>
        {getfilterdata.map((each)=> {
            return (
                <div className='all-products'>
                    <Link to={`/detail-page-furnitures/${each.id}`} style={{textDecoration:"none",fontWeight:"bold",color:"black"}}>
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

export default Furniture
