import React, { useEffect,useContext,useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from "axios"

const MyOrders = () => {

    const {url,token} =useContext(StoreContext)
    const [orders, setorders] = useState([])
   
    const fetchorders =async(req,res) =>
    {
        const response = await axios.post(url+"/api/order/userorders",{}, {headers:{token}})
        console.log(response)
        console.log(token)

         setorders(response.data.data)
         console.log(response.data.data)

        
    } 

    useEffect(()=>{
        if (token)
            {
                fetchorders()
            }
       
    
    },[token])

  return (
    <div>
        <h1 className='poppins-semibold'>My Orders</h1>
{/*           
          {
            orders.map((item,index)=>
                 return <p>{item}</p>
                  {
                   (item.items.map((i,index)=>{
                        console.log(i.name)
                        return i.name
                    }))
                    

                  }
          )} */}


          {orders.map((item,index)=>{
            return <p>{item.items.map((i,index)=>{
                return <p>{i.name}</p>
              })}</p>
          })}
          
    </div>
  )
}

export default MyOrders
