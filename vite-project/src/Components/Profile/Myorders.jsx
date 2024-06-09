import React from "react";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import  { useEffect,useContext,useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import axios from "axios"




const Myorders = () => {

  const {url,token} =useContext(StoreContext)
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
      const response = await axios.post(url+"/api/order/userorders",{}, {headers:{token}})
      
       setorders(response.data.data)
      
  } 

  useEffect(()=>{
      if (orders)
          {
              fetchorders()
          }
     
  
  },[orders])



  return (
    <div>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid
          className="bgr poppins-semibold"
          item
          xs={12}
          md={8}
          sx={{ mt: 5, p: 4 }}
        >
          <h1>My Orders</h1>
         <Grid className="scr">

         {orders.slice().reverse().map((order, orderIndex) => (
          order.items.map((item, itemIndex) => (
            
            <Grid
              key={`${orderIndex}-${itemIndex}`}
              className="blur"
              item
              xs={12}
              md={12}
              sx={{ p: 2, my: 4, display: "grid", gridTemplateColumns: "1fr 2fr 2fr 2fr 0.5fr", alignItems: 'center' }}
            >
             
              <img className="ordersimg" src={item.image} />
              <h3 className="poppins-regular">{item.name}</h3>
              <h3 className="poppins-regular">{formatDate(order.date)}</h3>
              <h3 className="poppins-regular">{order.status}</h3>
              <Button className="phbtn">
                <RefreshIcon sx={{ color: "black" }} />
              </Button>
            </Grid>
          ))
        ))}




          
           
          
            
           
          
            
            
           



          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Myorders;
