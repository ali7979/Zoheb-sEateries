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
              
              <img alt="item" src={`${url}/images/${item.image}`} />
              <p className="poppins-regular">{item.name}</p>
              <p className="poppins-regular">{order.address.firstName} {order.address.lastName}</p>

              <p className="poppins-regular">{formatDate(order.date)}</p>
              <p className="poppins-regular">{order.status}</p>
             
              
           
           
            </div>




          ))
        ))}
        </div>
















 











</div>


         
       















  )
}

export default Order
