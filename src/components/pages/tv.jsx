import { tvData } from '../data/tv'
import {Link} from "react-router-dom"

import React, { useState } from 'react'

const Tv = () => {
    const [filtertvresult,setFiltertvresult] = useState([])

    const Tvresult = (eachcompany) => {
        if (filtertvresult.includes(eachcompany)){
            setFiltertvresult(filtertvresult.filter(each => each !== eachcompany))
        } else {
            setFiltertvresult([...filtertvresult,eachcompany])
        }
    }

    const filterTvdata = filtertvresult.length === 0 ? tvData : tvData.filter((eachcompany) => filtertvresult.includes(eachcompany.brand))
   return (
    <div className="filter-products">
        <div className="filter-products-column">
        {tvData.map((each)=> {
            return (
                <div  style={{padding:"8px"}}>
                    <label style={{cursor:"pointer"}}>
                        <input style={{marginRight:"10px",cursor:"pointer"}}type="checkbox" checked={filtertvresult.includes(each.brand)} onChange={() => Tvresult(each.brand)}/>
                        {each.brand}
                    </label>
                </div>
            )
        })}
        </div>
        {filterTvdata.map((each)=> {
            return (
                <div className='all-products'>
                    <Link to={`/detail-page-tvs/${each.id}`} style={{textDecoration:"none",fontWeight:"bold",color:"black"}}>
                    <img alt="tv" src={each.image} style={{width:"280px",borderRadius:"10px"}}/>
                    <h1>{each.product}</h1>
                    <p>{each.brand}</p>
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

export default Tv
