import { booksData } from "../data/books"
import {Link} from "react-router-dom"

import React, { useState } from 'react'

const Books = () => {
    const [filterresult,setFilterresult] = useState([])


    const checkbtnchange = (eachproduct) => {
        if (filterresult.includes(eachproduct)){
            setFilterresult(filterresult.filter(each => each !== eachproduct))

        } else {
            setFilterresult([...filterresult,eachproduct])
        }
    }

    const filteredProduct = filterresult.length===0?
    booksData : booksData.filter((eachcompany)=>filterresult.includes(eachcompany.title))
   return (
    <div className="filter-products">
        <div className="filter-products-column">
        {booksData.map((each)=>{
            return (
                <div style={{padding:"8px"}}>
                    <label style={{cursor:"pointer"}}>
                    <input  style={{marginRight:"5px",cursor:"pointer"}}checked={filterresult.includes(each.title)} onChange={() => checkbtnchange(each.title)} type="checkbox"/>
                    {each.title}</label>
                </div>
            )
        })}
        </div>
        {filteredProduct.map((each)=> {
            return (
                <div className="all-products">
                    <Link to={`/detail-page-books/${each.id}`} style={{textDecoration:"none",fontWeight:"bold",color:"black"}}>
                    <img alt="ac" style={{width:"280px",borderRadius:"10px"}}src={each.image}/>
                    <h1>{each.product}</h1>
                    <p>{each.title}</p>
                    <p>{each.author}</p>
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

export default Books
