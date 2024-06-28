import React, { useEffect } from 'react';
import imgg from '../../assets/5.png'
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);


  return (
    <div className='mainfooter'>



<img src={imgg}   className='ftr'/> 
    <footer class="footer">
        <div class="box">
            <h2> Links </h2>
            <ul class="links">
                <li><Link to={"/home"}> Home </Link></li>
                <li><Link to={"/menu"}> Menu </Link></li>
                <li><Link to={"/contactus"}> About Us </Link></li>
                <li><Link to={"/contactus"}> Contact Us </Link></li>
            </ul>
        </div>
        <div class="box">
            <h2> News Letter </h2>
            <form action="" class="registration">
                <input type="email" name="email" id="email" placeholder="Enter your email Address"/>
                <button type="submit" onClick={()=>{navigate("/contactus")}}> Subscibe Now </button>
            </form>
        </div>
        <div class="box">
            <h2> Contact </h2>
            <p class="address"> Zoheb's Eatery  <br/>
               <p> zohebzob@gmail.com </p>
                <p>+91 7979772583</p>
            </p>
            <ul class="social">
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-youtube"></i></li>
            </ul>
        </div>
    </footer>
    </div>
  )
}

export default Footer
