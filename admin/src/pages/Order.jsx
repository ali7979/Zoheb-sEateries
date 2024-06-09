import React from 'react'
import  { useEffect,useContext,useState } from 'react'
import axios from "axios"


const Order = ({url}) => {

 
  const [orders, setorders] = useState([])


  const formatDate = (dateString) => {
    const options = {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: true
    };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  const fetchorders =async(req,res) =>
    {
        const response = await axios.post(url+"/api/order/adminorders")
     
  
         setorders(response.data.data)
        
    } 
  

const statushandler = async (event,orderId) => {
  
const resp= await axios.post(url+"/api/order/updatestatus",
  {
    orderId,
    status:event.target.value
  })
  if (resp.data.success)
    {
await fetchorders();
console.log(resp);
    }
}


    useEffect(()=>{
       
                fetchorders()
            
       
    
    },[orders])


  return (
    <div className='add'>











 


  
  
  
      
          <h1>My Orders</h1>
         
          <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Customer Name</b>
          <b>Date</b>
          <b>Status</b>
        </div>
         {orders.slice().reverse().map((order, orderIndex) => (
          order.items.map((item, itemIndex) => (
            <div
              key={`${orderIndex}-${itemIndex}`}
             
              className="list-table-format"
             >
              
              <img alt="item" src={item.image} />
              <p className="poppins-regular">{item.name}</p>
              <p className="poppins-regular">{order.address.firstName} {order.address.lastName}</p>

              <p className="poppins-regular">{formatDate(order.date)}</p>
              <p className="poppins-regular">
                
                
                
                <select onChange={(e)=>statushandler(e,order._id)} value={order.status}>
                <option value="Food Processing">Food Processing</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>


                </select>
                
                {/* {order.status} */}
                
                
                
                </p>
             
              
           
           
            </div>




          ))
        ))}
        </div>
















 











</div>


         
       















  )
}

export default Order
