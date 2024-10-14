import React from 'react'
import Ac from "../navbaritems/ac.jsx"
import Computers from '../navbaritems/computers.jsx'
import Men from "../navbaritems/men.jsx"
import Mobiles from "../navbaritems/mobile.jsx"
import Speakers from "../navbaritems/speakers.jsx"
import Tv from "../navbaritems/tv.jsx"
import Women from "../navbaritems/women.jsx"
import Books from "../navbaritems/books.jsx"


const Home = () => {
  return (
    <div>
      <h1>welcome to E-Mart</h1>
      <ul>
        <li><Ac/></li>
        <li><Computers/></li>
        <li><Mobiles/></li>
        <li><Tv/></li>
        <li><Speakers/></li>
        <Books/>
        <li><Men/></li>
        <li><Women/></li>
      </ul>
      
    </div>
  )
}

export default Home
