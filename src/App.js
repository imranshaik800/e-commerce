import Ac from './components/pages/ac.jsx';
import Computer from "./components/pages/computers.jsx"
import Mobile from "./components/pages/mobile.jsx"
import Men from "./components/pages/men.jsx"
import Speaker from "./components/pages/speakers.jsx"
import Tv from "./components/pages/tv.jsx"
import Women from "./components/pages/women.jsx"
import Kitchen from "./components/pages/kitchen.jsx"
import Navbar from "../src/components/Navbar"
import Furniture from "./components/pages/furniture.jsx"
import Fridge from "./components/pages/fridges.jsx"
import Book from "./components/pages/books.jsx"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "../src/components/Homepage/home.js"
import Acs from "../src/components/detailpage/acs.jsx"
import Computers from "../src/components/detailpage/computers.jsx"
import Fridges from "../src/components/detailpage/fridges.jsx"
import Kitchens from "../src/components/detailpage/kitchen.jsx"
import Mobiles from "../src/components/detailpage/mobile.jsx"
import Speakers from "../src/components/detailpage/speakers.jsx"
import Books from "../src/components/detailpage/books.jsx"
import Tvs from "../src/components/detailpage/tvs.jsx"
import Womens from "../src/components/detailpage/womens.jsx"
import Mens from '../src/components/detailpage/men.jsx';
import Cart from "../src/components/UserCart.jsx"
//import Furnitures from "../src/components/detailpage/furniture.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route exact path="/ac" element={<Ac/>}/>
        <Route exact path="/computers" element={<Computer/>}/>
        <Route exact path="/mobiles" element={<Mobile/>}/>
        <Route exact path="/speakers" element={<Speaker/>}/>
        <Route exact path="/tv" element={<Tv/>}/>
        <Route exact path="/women" element={<Women/>}/>
        <Route exact path="/kitchen" element={<Kitchen/>}/>
        <Route exact path="/furniture" element={<Furniture/>}/>
        <Route exact path="/fridges" element={<Fridge/>}/>
        <Route exact path="/men" element={<Men/>}/>
        <Route exact path="/books" element={<Book/>}/>
        <Route exact path="detail-page-ac/:id" element={<Acs/>}/>
        <Route exact path="detail-page-computers/:id" element={<Computers/>}/>
        <Route exact path="detail-page-kitchens/:id" element={<Kitchens/>}/>
        <Route exact path="detail-page-mens/:id" element={<Mens/>}/>
        <Route exact path="detail-page-mobiles/:id" element={<Mobiles/>}/>
        <Route exact path="detail-page-speakers/:id" element={<Speakers/>}/>
        <Route exact path="detail-page-tvs/:id" element={<Tvs/>}/>
        <Route exact path="detail-page-womens/:id" element={<Womens/>}/>
        <Route exact path="detail-page-fridges/:id" element={<Fridges/>}/>
        <Route exact path="detail-page-books/:id" element={<Books/>}/>
        <Route exact path="/cart" element={<Cart/>}/>

      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
