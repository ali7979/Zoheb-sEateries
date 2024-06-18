import * as React from 'react';
import { useContext } from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { StoreContext } from "../../context/StoreContext";


export default function CartCard({id,name,img,price,cartItems}) {
  const theme = useTheme();
  const { addToCart, removeCart } = useContext(StoreContext);

  return (
<Card sx={{ 
  display: 'flex', 
  flexDirection: 'row', 
  m: 2, 
  borderRadius: '20px', 
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Adding a subtle shadow
  transition: 'box-shadow 0.3s ease-in-out', // Adding transition for smooth effect
  '&:hover': { // Enhancing the shadow on hover
    boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)',
  },
  '@media (max-width: 600px)': {
    height: 100,
  }
}}>
  
     <CardMedia
        component="img"
        sx={{ width: 200 , height:151 , '@media (max-width: 600px)': {
            width: 100,
            height: 100
          } }}
        image={img}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' ,flex: '1 0 auto',width:{xs:100} }}>
        <CardContent  sx={{ flex: '1 0 auto' }}>
          <Typography  className='poppins-semibold' component="div" variant="h5">
          {name}
          </Typography>
          <Typography sx={{mt:{xs:2, md:6}}} className='poppins-semibold' variant="subtitle1" color="text.secondary" component="div">
          Rs {price}
          </Typography>
        </CardContent>
        
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, mx: { xs: 0.5, sm: 2 } ,fontSize: { xs: '0.8rem', sm: '1rem' }}}>
      <div className='food-item-counter'>
            <div className="cnn">
      <RemoveCircleOutlineIcon onClick={() =>  removeCart(id)}  sx={{color:'red', fontSize: { xs: '1.4rem', sm: '1.8rem' } , cursor:'pointer'}} />
    <h2  style={{display:'contents'}}>{cartItems[id]}</h2> 
      <AddCircleOutlineIcon  onClick={() =>  addToCart(id)} sx={{color:'green', fontSize: { xs: '1.4rem', sm: '1.8rem' },cursor:'pointer'}} />
    </div>
    </div>
        </Box>
     
    </Card>
  );
}