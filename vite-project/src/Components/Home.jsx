import React from 'react';
import Spline from '@splinetool/react-spline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { useNavigate } from 'react-router-dom';
import './animations.css'; // Import the CSS file

export default function Header() {
    const navigate = useNavigate();
    const nmenu = () => {
        navigate("/menu");
    }

    return (
        <div className='container fade-in' style={{height: '100%' }}>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 1 }} sx={{ mt: { xs:-3} }}>
                <Grid item xs={12} md={6} >
                    <div className="heading slide-in-left">
                        <h1 className='poppins-extrabold'>
                            Good <span className='ylw'>Food</span> 
                            <div>for Good <span className='yl'>Mood</span></div>
                        </h1>
                        <p className="poppins-semibold fade-in" style={{ animationDelay: '1s' }}>
                            Experience Culinary Bliss With Every Mouthful. 
                            From Our Kitchen to Your Table, Bringing Joyful Flavors
                        </p>
                        <Button
                            className="btn button-hover"
                            size="large"
                            sx={{ borderRadius: '20px', background: "#576CBC", mt: 6, fontFamily: '"Poppins", sans-serif', paddingInline: "1em", fontWeight: 600 }}
                            variant="contained"
                            endIcon={<FastfoodIcon />}
                            onClick={nmenu}
                        >
                            Order Now
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: { md: -5} }}>
                    <div className='container scale-in'>
                        <Spline className='spline float' scene="https://prod.spline.design/SEogRtqy0Y0sUCtt/scene.splinecode" />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
