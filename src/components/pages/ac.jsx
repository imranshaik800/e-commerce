import { acData } from "../data/ac";
import {Link} from "react-router-dom"

import React, { useState } from 'react'

const Ac = () => {
    const [filterresult,setFilterresult] = useState([])


    const checkbtnchange = (eachproduct) => {
        if (filterresult.includes(eachproduct)){
            setFilterresult(filterresult.filter(each => each !== eachproduct))

        } else {
            setFilterresult([...filterresult,eachproduct])
        }
    }

    const filteredProduct = filterresult.length===0?
    acData : acData.filter((eachcompany)=>filterresult.includes(eachcompany.company))
   return (
    <div className="filter-products">
        <div className="filter-products-column">
        {acData.map((each)=>{
            return (
                <div style={{padding:"8px"}}>
                    <label style={{cursor:"pointer"}}>
                    <input  style={{marginRight:"5px",cursor:"pointer"}}checked={filterresult.includes(each.company)} onChange={() => checkbtnchange(each.company)} type="checkbox"/>
                    {each.company}</label>
                </div>
            )
        })}
        </div>
        {filteredProduct.map((each)=> {
            return (
                <div className="all-products">
                    <Link to={`/detail-page-ac/${each.id}`} style={{textDecoration:"none",fontWeight:"bold",color:"black"}}>
                    <img alt="ac" style={{width:"280px",borderRadius:"10px"}}src={each.image}/>
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

export default Ac
