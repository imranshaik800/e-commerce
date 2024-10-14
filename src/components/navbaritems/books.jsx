import { booksData } from "../data/books"
import {Link} from "react-router-dom"

import React from 'react'

const Book = () => {
    const spliceItems = booksData.slice(0,5)
  return (
    <>
    <Link to="/books" style={{textDecoration:"none",color:"green",fontWeight:"bold"}}>
    <h1 style={{textAlign:"center"}}>Books</h1> 
    <div className="navbar-items-home-page">
     
        {spliceItems.map((each)=>{
            return (
                <div>
                    <img alt="ac" src={each.image}/>
                </div>
            )
        })} 
    </div>
    </Link>
    </>
  )
}

export default Book
