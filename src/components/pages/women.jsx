import { womanData } from '../data/women'
import {Link} from "react-router-dom"

import React, { useState } from 'react'

const Ac = () => {
    const [filterwomendata,setFilterwomendata] = useState([])

    const filterchechbtn = (eachcompany) => {
        if (filterwomendata.includes(eachcompany)){
            setFilterwomendata(filterwomendata.filter((each) => each !== eachcompany))
        } else {
            setFilterwomendata([...filterwomendata,eachcompany])
        }
    }

    const getfilterwomendata = filterwomendata.length === 0 ? womanData : womanData.filter((eachcompany) => filterwomendata.includes(eachcompany.brand))

   return (
    <div className="filter-products">
        <div className="filter-products-column">
        {womanData.map((each) => {
            return (
                <div style={{padding:"8px"}}>
                    <label style={{cursor:"pointer"}}>
                      <input style={{marginRight:"5px"}} type="checkbox" checked={filterwomendata.includes(each.brand)} onClick={() => filterchechbtn(each.brand)}/>
                    {each.brand} </label>  
                </div>
            )
        })}
        </div>
        {getfilterwomendata.map((each)=> {
            return (
                <div className='all-products'>
                    <Link to={`/detail-page-womens/${each.id}`} style={{textDecoration:"none",fontWeight:"bold",color:"black"}}>
                    <img alt="women" src={each.image} style={{width:"280px",borderRadius:"10px"}}/>
                    <h1>{each.product}</h1>
                    <p>{each.brand}</p>
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
