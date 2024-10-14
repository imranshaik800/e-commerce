import { mobileData } from '../data/mobiles'
import {Link} from "react-router-dom"
import React, { useState } from 'react'

const Mobile = () => {
    const [filterMobiledata,setFiltermobiledata] = useState([])
    const checkbtnfilter = (eachcompany) => {
        if (filterMobiledata.includes(eachcompany)) {
            setFiltermobiledata(filterMobiledata.filter(each => each !== eachcompany))
        } else {
            setFiltermobiledata([...filterMobiledata,eachcompany])
        }
    }

    const filterdata = filterMobiledata.length === 0? mobileData : mobileData.filter((eachcompany) => filterMobiledata.includes(eachcompany.company))
   return (
    <div className="filter-products">
        <div className="filter-products-column">
        {mobileData.map((each) => {
            return (
                <div  style={{padding:"8px"}}>
                    <label style={{cursor:"pointer"}}>
                        <input style={{marginRight:"10px",cursor:"pointer"}}type="checkbox" checked={filterMobiledata.includes(each.company)} onChange={() => checkbtnfilter(each.company)}/>
                        {each.company}
                    </label>
                </div>
            )
        })}
        </div>
        {filterdata.map((each)=> {
            return (
                <div className='all-products'>
                    <Link to={`/detail-page-mobiles/${each.id}`} style={{textDecoration:"none",fontWeight:"bold",color:"black"}}>
                    <img alt="mobiles" src={each.image} style={{width:"280px",borderRadius:"10px"}}/>
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

export default Mobile
