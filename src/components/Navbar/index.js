import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { UseCart } from '../context/cartcontext'

import "./index.css"



const Index = () => {
  const {cartItems} = UseCart()
  const [navbutton,setNavbutton] = useState("")



  console.log(navbutton)
 
  return (
    <>
    <div className='nav-items'>
        <Link to="/" style={{textDecoration:"none",color:"white"}}><h1 >E-Mart</h1></Link>
        <input className="input-element" placeholder="Type your Product here" type="text"/>
        <p>Login/signup</p>
        <Link to="/cart" style={{textDecoration:"none",color:"white"}}><p>Cart<sup style={{color:"orange"}}>{cartItems.length}</sup></p></Link>
    </div>
    <ul className='un-orderlist'>
      <Link to="/men" style={{textDecoration:"none",color:"black"}}><li onClick={() => setNavbutton("Men")}>Men</li>{navbutton === "Men" ? <hr/>:<></>}</Link>
      <Link to="/computers" style={{textDecoration:"none",color:"black"}}><li onClick={() => setNavbutton("computers")}>Computers</li>{navbutton === "computers" ? <hr/>:<></>}</Link>
      <Link to="/women" style={{textDecoration:"none",color:"black"}}><li onClick={() => setNavbutton("women")}>Women</li>{navbutton === "women" ? <hr/>:<></>}</Link>
      <Link to="/kitchen" style={{textDecoration:"none",color:"black"}}><li onClick={() => setNavbutton("kitchen")}>Kitchen</li>{navbutton === "kitchen" ? <hr/>:<></>}</Link>
      <Link to="/watch" style={{textDecoration:"none",color:"black"}}><li onClick={() => setNavbutton("watch")}>Watch</li>{navbutton === "watch" ? <hr/>:<></>}</Link>
      <Link to="/tv" style={{textDecoration:"none",color:"black"}}><li onClick={() => setNavbutton("Tv")}>Tv</li>{navbutton === "Tv" ? <hr/>:<></>}</Link>
      <Link to="/fridges" style={{textDecoration:"none",color:"black"}}><li onClick={() => setNavbutton("Fridges")}>Fridges</li>{navbutton === "Fridges" ? <hr/>:<></>}</Link>
      <Link to="/speakers" style={{textDecoration:"none",color:"black"}}><li onClick={() => setNavbutton("speakers")}>Speakers</li>{navbutton === "speakers" ? <hr/>:<></>}</Link>
      <Link to="/mobiles" style={{textDecoration:"none",color:"black"}}><li onClick={() => setNavbutton("mobiles")}>Mobiles</li>{navbutton === "mobiles" ? <hr/>:<></>}</Link>
      <Link to="/furniture" style={{textDecoration:"none",color:"black"}}><li onClick={() => setNavbutton("furniture")}>Furniture</li>{navbutton === "furniture" ? <hr/>:<></>}</Link>
      <Link to="/books" style={{textDecoration:"none",color:"black"}}><li onClick={() => setNavbutton("books")}>Books</li>{navbutton === "books" ? <hr/>:<></>}</Link>
      <Link to="/ac" style={{textDecoration:"none",color:"black"}}><li onClick={() => setNavbutton("ac")}>Ac</li>{navbutton === "ac" ? <hr/>:<></>}</Link>
    </ul>

    </>

  )
}

export default Index
