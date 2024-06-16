
import './App.css'

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ExploreMenu from './Components/ExploreMenu';
import { useState } from 'react';
import FoodDisplay from './Components/FoodDisplay';
import { Route, Routes } from 'react-router-dom';

import Cart from './Components/Cart/Cart';
import PlaceOrder from './Components/PlaceOrder';
import Verify from './Components/Verify';
import MyOrders from './Components/MyOrders';
import Myorders from './Components/Profile/Myorders';
import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile/Profile';
import ContactUs from './Components/ContactUs';









function App() {
  const [category,setCategory]=useState("All");
  return (
    <>
    <Navbar />
    <Routes>
<Route path="/" element={<Home/>} />
<Route path="/home" element={<Home/>} />

<Route path="/menu" element={<ExploreMenu category={category} setCategory={setCategory}/>} />
<Route path="/cart" element={<Cart/>} />
<Route path="/order" element={<PlaceOrder/>} />
<Route path="/verify" element={<Verify/>} />
<Route path="/myorders" element={<Myorders/>} />
<Route path="/contactus" element={<ContactUs/>} />

<Route path="/profile" element={<Profile/>} />




    </Routes>
    <Footer/>


{/* <Header/> */}
{/* <ExploreMenu category={category} setCategory={setCategory}  /> */}
    


    
    </>
  )
}

export default App
