import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useContext } from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { StoreContext } from '../context/StoreContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FoodCard = ({id,name,price,desc,image}) => {
  AOS.init();
    const {cartItems,addToCart,removeCart,url} = useContext(StoreContext)

  return (
    <div  data-aos="zoom-in"  className='food-card'>
  
  <Card className='cardd' sx={{ width: '100%', height: '29rem', borderRadius: '15px 15px 0px 0px', boxShadow: '0px 10px 10px #00000015'}}>
      <CardActionArea>
        <CardMedia
        
          component="img"
          height="200"
          // image={url+"/images/"+image}
          image={image}
          alt="food"
        />
        <CardContent sx={{ p: { xs: 1.5, md: 3 } }}>
          <Typography className='n poppins-bold' gutterBottom variant="h5" component="div">
            {name}
            
          </Typography>
          <Typography sx={{minHeight:90}} className='description poppins-light' color="text.secondary">
            {desc}
          </Typography>
          <Chip   className='chip poppins-bold' label={`₹ ${price}`} sx={{backgroundColor:'#576CBC', color:'#fff',position:'absolute',top:'150px',p:1.5,fontSize:'1rem'}} />
       
         
          <Typography className=' circle poppins-semibold' sx={{mt:5,fontSize:'1.3rem'}} >         
  {!cartItems[id] ? (
    <AddCircleOutlineIcon className='add' sx={{fontSize:'2rem',color:'green'}} onClick={() => addToCart(id)} />
  ) : (
    <div className='food-item-counter'>
            <div className="cn">
      <RemoveCircleOutlineIcon className='subtract' onClick={() => removeCart(id)} sx={{color:'red',fontSize:'1.8rem'}} />
    <p>{cartItems[id]}</p> 
      <AddCircleOutlineIcon className='add' onClick={() =>  addToCart(id)} sx={{color:'green',fontSize:'1.8rem'}} />
    </div>
    </div>
  )}
</Typography>
        </CardContent>
        
      </CardActionArea>
    </Card>
    </div>
  )
}

export default FoodCard




