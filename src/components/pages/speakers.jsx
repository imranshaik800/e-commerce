import { speakerData } from '../data/speaker'
import {Link} from "react-router-dom"

import React,{useState} from 'react'

const Speaker = () => {
    const [filterMobiledata,setFiltermobiledata] = useState([])
    const checkbtnfilter = (eachcompany) => {
        if (filterMobiledata.includes(eachcompany)) {
            setFiltermobiledata(filterMobiledata.filter(each => each !== eachcompany))
        } else {
            setFiltermobiledata([...filterMobiledata,eachcompany])
        }
    }

    const filterdata = filterMobiledata.length === 0? speakerData : speakerData.filter((eachcompany) => filterMobiledata.includes(eachcompany.brand))
   return (
    <div className="filter-products">
        <div className="filter-products-column">
        {speakerData.map((each) => {
            return (
                <div  style={{padding:"8px"}}>
                    <label style={{cursor:"pointer"}}>
                        <input style={{marginRight:"10px",cursor:"pointer"}}type="checkbox" checked={filterMobiledata.includes(each.brand)} onChange={() => checkbtnfilter(each.brand)}/>
                        {each.brand}
                    </label>
                </div>
            )
        })}
        </div>
        {filterdata.map((each)=> {
            return (
                <div className='all-products'>
                    <Link to={`/detail-page-speakers/${each.id}`} style={{textDecoration:"none",fontWeight:"bold",color:"black"}}>
                    <img alt="speakers" src={each.image} style={{width:"280px",borderRadius:"10px"}}/>
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

export default Speaker
