import React from 'react'
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";


import menulist from '../assets/Categories.json'
import Divider from '@mui/material/Divider';
import FoodDisplay from '../Components/FoodDisplay'
import video from '../assets/vdo2.mp4' 
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge,Checkbox } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";


const ExploreMenu = ({category,setCategory}) => {
  const {  cartItems } = useContext(StoreContext);
const navigate = useNavigate();
  return (
    <>
    <div>
<div className="vdobox">
    <video className="vdo"  height="400"   preload="yes"  playsInline   autoPlay loop muted>
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
</video>
</div>

      <div className="explore-menu">
<h1 className='poppins-bold'>Explore our Menu</h1>
<p className='poppins-semibold'>
    Choose from a diverse menu featuring menu
</p>
<div className='menu-list'>
{
menulist.map((item,index)=>{
return(
<div onClick={()=>setCategory(prev=>prev===item.name?"All":item.name)}  key={index} className='item'>

<img className={`menu-img ${category === item.name ? "active" : ""}`} src={item.image} />


    <h4 className='poppins-medium'>{item.name}</h4>
    
     </div>
)

})
}

</div>

<Divider sx={{border:'2px solid #A5D7E8'}} variant="middle"  />



      </div>


    </div>

    <FoodDisplay category={category} />
    
    
    
    
    
    <Button
        variant="outline"
      
        className='stickybtn'
      
        onClick={() => {navigate("/cart")}}
      >
        Go To Cart
  
           <Badge badgeContent={Object.keys(cartItems).length} color="primary"> <ShoppingCartIcon sx={{ml:1}} /></Badge>
         
      </Button>
    
    
    
    
    
    </>
  )
}

export default ExploreMenu
