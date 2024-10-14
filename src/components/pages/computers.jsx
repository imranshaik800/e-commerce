import { computerData } from '../data/compouters'
import {Link} from "react-router-dom"

import React, { useState } from 'react'

const Computers = () => {
    const [filtercomputers,setFiltercomputers] = useState([])

    const filtercheckbtn = (eachcomapny) => {
        if (filtercomputers.includes(eachcomapny)) {
            setFiltercomputers(filtercomputers.filter((each) => each !== eachcomapny))
        } else {
            setFiltercomputers([...filtercomputers,eachcomapny])
        }
    }

    const getfiltereddata = filtercomputers.length === 0 ? computerData : computerData.filter((eachcomapny) => filtercomputers.includes(eachcomapny.company))
   return (
    <div className="filter-products">
        <div className="filter-products-column">

        {computerData.map((each)=> {
            return (
                <div  style={{padding:"8px"}}>
                    <label  style={{cursor:"pointer"}}>
                        <input style={{marginRight:"10px",cursor:"pointer"}} type="checkbox" checked={filtercomputers.includes(each.company)} onChange={() => filtercheckbtn(each.company)}/>
                        {each.company}
                    </label>
                </div>
            )
        })}
        </div>
        {getfiltereddata.map((each)=> {
            return (
                <div className='all-products'>
                    <Link to={`/detail-page-computers/${each.id}`} style={{textDecoration:"none",fontWeight:"bold",color:"black"}}>
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

export default Computers
