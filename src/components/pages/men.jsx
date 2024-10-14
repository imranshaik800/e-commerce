import { menData } from '../data/men'
import {Link} from "react-router-dom"

import React, { useState } from 'react'

const Ac = () => {
    const [filtermenitems,setFiltermenitems] = useState([])

    const filtercheckbt = (eachbrand) => {
        if (filtermenitems.includes(eachbrand)) {
            setFiltermenitems(filtermenitems.filter((each) => each !== eachbrand))
        } else {
            setFiltermenitems([...filtermenitems,eachbrand])
        }
    }

    const getfilterdata = filtermenitems.length === 0 ? menData : menData.filter((eachbrand) => filtermenitems.includes(eachbrand.brand))
   return (
    <div className="filter-products">
        <div className="filter-products-column">

        {menData.map((each) => {
            return (
                <div style={{padding:"8px"}}>
                    <label style={{cursor:"pointer"}}>
                        <input style={{marginRight:"10px",cursor:"pointer"}} type="checkbox" checked={filtermenitems.includes(each.brand)} onChange={() => filtercheckbt(each.brand)}/>
                        {each.brand}
                    </label>
                </div>
            )
        })}
        </div>
        {getfilterdata.map((each)=> {
            return (
                <div className='all-products'>
                    <Link to={`/detail-page-mens/${each.id}`} style={{textDecoration:"none",fontWeight:"bold",color:"black"}}>
                    <img alt="men" src={each.image} style={{width:"280px",borderRadius:"10px"}}/>
                    <h1>{each.product}</h1>
                    <p>{each.company}</p>
                    <p>{each.model}</p>
                    <p>{each.price}</p>
                    <p>{each.type}</p>
                    <p>{each.brand}</p>
                    <p>{each.category}</p>
                    <p>{each.description}</p>
                    </Link>
                </div>
            )
        })}
      
    </div>
  )
}

export default Ac
