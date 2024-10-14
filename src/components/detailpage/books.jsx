import React from 'react'
import { booksData } from '../data/books'
import { useParams } from 'react-router-dom'
import { UseCart } from '../context/cartcontext'


const Books = () => {
    const {id} = useParams()
    const filterdata = booksData.filter((each) => each.id === id)
    const product = booksData.find((eachdata)=> eachdata.id === id)

    const {addtocart} = UseCart()
  
  return (
    <div>
        {filterdata.map((eachdata)=> {
            return (
                <div style={{display:"flex"}}>
                    <img alt="ac" src={eachdata.image}/>
                    <div style={{marginTop:"100px",marginLeft:"100px"}}>
                    <h4>{eachdata.title}</h4>
                    <p>{eachdata.author}</p>
                    <p>RS.{eachdata.price}</p>
                    <p>{eachdata.description}</p>
                    <button style={{backgroundColor:"blue",border:"none",borderRadius:"10px",color:"white",padding:"10px",cursor:"pointer"}} onClick={() => addtocart(product)}>Add to cart</button>
                </div>
                </div>
            )
        })}
      
    </div>
  )
}

export default Books
