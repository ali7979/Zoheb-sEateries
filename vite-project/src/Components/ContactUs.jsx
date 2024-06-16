import React from 'react'
import contac from '../assets/contactus.svg'
import searchbarimg from '../assets/srchbar.gif'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';


const Blog = () => {
  return (
    <div>

<Grid container >
     
     
      <Grid item xs={12} md={5}  sx={{pt:0,mt:'-3rem',mb:0,pb:0 }}>   
     
      <img src={contac}/>
     
      </Grid>

      <Grid item xs={12} md={7} sx={{overflow:'hidden',mt:2 }} >  
      <Grid className='contactcard' sx={{marginInline:'2rem',padding:' 1rem 3rem 1rem 3rem',borderRadius:'2rem'}}>
        <h1 className='contacthead'> Contact Us</h1>
      <img src={searchbarimg} className='srchbar'/>

      <Box sx={{ '& > :not(style)': { m: 1 } }}>

      <TextField id="standard-basic" label="Name" variant="standard" fullWidth />
      <TextField id="standard-basic" label="Email Id" variant="standard" fullWidth />
      <TextField
          id="outlined-multiline-static"
          label="Your Comments"
          multiline
          rows={4}
          defaultValue="Write your Issues/Comments"
          fullWidth
        />
     <div style={{display:'flex',justifyContent:'center'}}>
     <Button variant="contained"  sx={{background:'black',borderRadius:'2rem',paddingInline:'6rem'}}>Submit</Button>
     </div>
    </Box>
    </Grid>

      









      </Grid>

      </Grid>
      
  
    </div>
  )
}

export default Blog
