import React from 'react'
import tick from '../assets/tick.gif'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ThankYou = () => {

const navigate=useNavigate();

const navhome=()=>{
    navigate("/");
}



  return (
    <>
    <div className='thnkbox'>
 
      <img className='thankyou' src={tick} alt="completed" />
     
    </div>
    <div className='thnktxt'>
     <h3 >We have recieved your response , Kindly allow us some time we are reviewing it. </h3>
     <h3>We will revert you as soon as possible </h3>
     <Button onClick={navhome} variant='outlined'>Back to Home</Button>
     </div>
     </>
  )
}

export default ThankYou
