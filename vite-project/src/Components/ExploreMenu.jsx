import React from 'react'
import menulist from '../assets/Categories.json'
import Divider from '@mui/material/Divider';
import FoodDisplay from '../Components/FoodDisplay'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <>
    <div>
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

    <FoodDisplay category={category} /></>
  )
}

export default ExploreMenu
