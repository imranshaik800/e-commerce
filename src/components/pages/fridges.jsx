import { fridgeData } from '../data/frideges'
import {Link} from "react-router-dom"

import React, { useState } from 'react'

const Fridge = () => {
    const [filterfridge,setFilterfridge] = useState([])

    const fridgecheckbtn = (eachbrand) => {
        if (filterfridge.includes(eachbrand)){
            setFilterfridge(filterfridge.filter((each) => each !== eachbrand))
        } else {
            setFilterfridge([...filterfridge,eachbrand])
        }
    }

    const getfilterdata = filterfridge.length === 0 ? fridgeData : fridgeData.filter((eachbrand) => filterfridge.includes(eachbrand.brand))


   return (
    <div className="filter-products">
        <div className="filter-products-column">
        {fridgeData.map((each)=>{
            return (
                <div style={{padding:"8px"}}>
                    <label  style={{cursor:"pointer"}}>
                        <input style={{marginRight:"10px",cursor:"pointer"}}type="checkbox" checked={filterfridge.includes(each.brand)} onChange={() => fridgecheckbtn(each.brand)}/>
                        {each.brand}
                    </label>
                </div>
            )
        })}
        </div>
        {getfilterdata.map((each)=> {
            return (
                <div className='all-products'>
                    <Link to={`/detail-page-fridges/${each.id}`} style={{textDecoration:"none",fontWeight:"bold",color:"black"}}>
                    <img alt="computers" src={each.image} style={{width:"280px",borderRadius:"10px"}}/>
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

export default Fridge
