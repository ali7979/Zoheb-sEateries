import React from 'react'
import imgg from '../../assets/5.png'

const Footer = () => {
  return (
    <div className='mainfooter'>



<img src={imgg}   className='ftr'/> 
    <footer class="footer">
        <div class="box">
            <h2> Links </h2>
            <ul class="links">
                <li><a href="#"> Home </a></li>
                <li><a href="#"> Blogs </a></li>
                <li><a href="#"> Services </a></li>
                <li><a href="#"> About Us </a></li>
                <li><a href="#"> Contact Us </a></li>
            </ul>
        </div>
        <div class="box">
            <h2> News Letter </h2>
            <form action="" class="registration">
                <input type="email" name="email" id="email" placeholder="Enter your email Address"/>
                <button type="submit"> Subscibe Now </button>
            </form>
        </div>
        <div class="box">
            <h2> Contact </h2>
            <p class="address"> 123, xyz Road, ABC 20 <br/>
                Hisar, Haryana, India
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
