import React from 'react'
import Spline from '@splinetool/react-spline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';


export default function Header() {
    const navigate = useNavigate();
    const nmenu=()=>{
navigate("/menu");
    }
     
 
  return (
    <div className='container' style={{height:'100%'}}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 1 }} sx={{mt:{md:-7}}}>
      <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }} >   
       <div className="heading" >
    <h1  className='poppins-extrabold'>Good <span className='ylw'>Food</span> <div>for Good <span className='yl'>Mood</span></div></h1>
    
    <p className="poppins-semibold">Experience Culinary Bliss
With Every Mouthful.
From Our Kitchen to Your Table,
Bringing Joyful Flavors</p>

    <Button className="btn " 
            size= "large" 
            sx={{borderRadius:'20px',background:"#576CBC",mt:6 , fontFamily: '"Poppins", sans-serif',paddingInline:"1em",
  fontWeight: 600}} variant="contained" label="" endIcon={<FastfoodIcon/>} onClick={nmenu}>
        Order Now
      </Button>
    </div>

    
  </Grid>

  <Grid item xs={12} md={6}>  
    <div className='container'> 
    {/* <Spline  scene="https://prod.spline.design/ZqkYaZBFkTp3yuN7/scene.splinecode" style={{position:'absolute' , top:0 ,left:0}} /> */}
   <Spline className='spline' scene="https://prod.spline.design/SEogRtqy0Y0sUCtt/scene.splinecode" />

</div>
  </Grid>
 
</Grid>

  


 </div>
  )
}
