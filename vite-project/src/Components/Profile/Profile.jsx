import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {  useNavigate } from "react-router-dom";



const Profile = () => {

const navigate=useNavigate();



  return (
    <div>
       <Box sx={{ flexGrow: 1,marginInline:'5rem',marginTop:'1.5rem' }}>
       <h1>My Profile</h1>

      <Grid container sx={{display:'flex'}} spacing={4}>

        <Grid item xs={12} md={4}>
        <div className='g1'>
        <div className='blob'>
<img className='imgblob' src='https://res.cloudinary.com/devfrzibz/image/upload/v1717997366/profile_d1qeat.jpg'/>
        </div>

        </div>
        </Grid>
        <Grid item xs={12} md={8}>
            <div className='g2'>
                <h1 className='poppins-semibold'>Hi Zoheb , </h1>
                <p  className='poppins-light'>Thanks for being our member since 3 months</p>
                <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid className='rd 'item xs={12} md={8}>
         <div className='til a' onClick={()=>{     navigate(0)
}}><h4 className='poppins-semibold'>My Information</h4></div>
        </Grid>
        <Grid className='rd ' item xs={12} md={4}>
        <div className='til b' onClick={()=>{     navigate("/cart")
}}><h4 className='poppins-semibold'>My Cart</h4></div>
        </Grid>
        <Grid className='rd 'item xs={12} md={6}>
         <div className='til c' onClick={()=>{     navigate("/myorders")
}}><h4 className='poppins-semibold'>My Orders</h4></div>
        </Grid>
        <Grid className='rd ' item xs={12} md={6}>
        <div className='til d' onClick={()=>{     navigate(0)
}}><h4 className='poppins-semibold'>My Favourites</h4></div>
        </Grid>
      </Grid>
    </Box>




        </div>
        </Grid>
       
      </Grid>
    </Box>

    </div>
  )
}

export default Profile
