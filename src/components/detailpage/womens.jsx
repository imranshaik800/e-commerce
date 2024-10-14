import React from 'react'
import { womanData } from '../data/women'
import { useParams } from 'react-router-dom'
import { UseCart } from '../context/cartcontext'

const Womens = () => {
    const {id} = useParams()
   

    const filterdata = womanData.filter((each) => each.id === id)
    const product = womanData.find((each)=>each.id === id)
    const {addtocart} = UseCart()
   
  return (
    <div>
        {filterdata.map((eachdata)=> {
            return (
                <div style={{display:"flex"}}>
                    <img alt="ac" src={eachdata.image}/>
                    <div style={{marginTop:"100px",marginLeft:"100px"}}>
                    <h4>{eachdata.company}</h4>
                    <p>{eachdata.model}</p>
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

export default Womens
