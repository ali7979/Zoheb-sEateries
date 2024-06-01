import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';


const Verify = () => {

const [searchParams,setSearchParams] = useSearchParams();
const success = searchParams.get('success');
const orderId = searchParams.get('orderId');
// console.log(success,orderId);

const {url} = useContext(StoreContext);
const navigate = useNavigate();

const verifypayment = async() =>{
    const response = await axios.post(url+"/api/order/verify",{success,orderId}); 
    if (response.data.success)
        {
                navigate("/home")
        }
    else{
        navigate("/")
    }
}

useEffect(()=>{
    verifypayment();
},[])







  return (
    <>
    <div className="spinner">
      <span className="loader"></span>
      </div>
      </>
    
  )
}

export default Verify
