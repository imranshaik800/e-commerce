import React from 'react'
import { UseCart } from './context/cartcontext'


const UserCart = () => {
    const {cartItems,removecart} = UseCart()




  return (
    <div>
        <h1>Your cart Items</h1>
       
        {cartItems.map((each)=>{
            return (
                <div style={{display:"flex",justifyContent:"center"}}>
                    <img alt="cart" src={each.image}/>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <p style={{paddingRight:"50px",paddingLeft:"50px"}}>{each.price}</p>
                    <button style={{width:"100px",padding:"10px",border:"none",backgroundColor:"red",color:"white",borderRadius:"10px",cursor:"pointer"}} onClick={() => removecart(each)}>Remove cart</button>
                </div>
                </div>
            )
        })} 
        
    </div>
  )
}

export default UserCart
