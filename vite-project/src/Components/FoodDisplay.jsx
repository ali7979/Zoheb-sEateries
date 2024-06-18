import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodCard from './FoodCard'

const FoodDisplay = ({category}) => {

    const {foodlist} =useContext(StoreContext)
  return (
    <>
          <h1 className='poppins-bold topdishes' style={{margin:'3rem 4rem'}}>Top dishes near you</h1>

    <div className='food-display' id='food-display'>
      <div className="foodlist">
        {
            foodlist.map((item,index)=>{
                  if (category==="All" || category===item.category)
                  {
                    return <FoodCard key={index} id={item._id} name={item.name} desc={item.description} price={item.price} image={item.image} />

                  }


            })
        }

      </div>
      
    </div>
    </>

  )
}

export default FoodDisplay
