import React, { useContext,useEffect,useState } from "react";
import { Button, Box,Divider, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";


const PlaceOrder = () => {
  const { getTotalCartAmount,token,foodlist,cartItems,url } = useContext(StoreContext);


  const [data,setData] = useState ({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zip:"",
    country:"",
    phone:""

  })


  const onChangeHandler = (e) => {
    const name=e.target.name; 
    const value=e.target.value;
    setData(data=>({...data,[name]:value}))
  }


  const placeOrder= async (event) =>
    {
        event.preventDefault();
        let orderItems= [];
        foodlist.map((item)=>{
          if (cartItems[item._id]>0)
            {
          let itemInfo=item ; 
          itemInfo["quantity"] = cartItems[item._id];
          orderItems.push(itemInfo);
            }
        })
        let orderData = {
          address:data , 
          items:orderItems,
          amount:getTotalCartAmount()+35,
    
        }
        let response= await axios.post(url+"/api/order/place",orderData,{headers:{token}})
        console.log(response);

        if(response.data.success) {
          const {session_url} =response.data;
          console.log(session_url);

          window.location.replace(session_url);
          console.log(session_url);

        }
        else {
          alert("Error in placing order");
        }

    }

   



  return (
    <div>
      <form onSubmit={placeOrder}  className="place-order">
      <Grid container sx={{  p: 5 }}>
        <Grid xs={12} md={6} sx={{ p: { xs: 0, md: 2 },px: { xs: 0, md: 5 } }}>
          <h1 className="poppins-bold ">Delivery Information</h1>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            style={{ marginTop: "1.5rem" }}
          >
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                size="small"
                required
                name="firstName"
                onChange={onChangeHandler}
                value={data.firstName}
                sx={{ width: "100%" }}
                variant="outlined"
                InputLabelProps={{
                  sx: {
                    fontFamily: "Poppins" /* add other font properties here */,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                required
                size="small"
                name="lastName"
                onChange={onChangeHandler}
                value={data.lastName}
                sx={{ width: "100%" }}
                variant="outlined"
                InputLabelProps={{
                  sx: {
                    fontFamily: "Poppins" /* add other font properties here */,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email Id"
                required
                size="small"
                name="email"
                onChange={onChangeHandler}
                value={data.email}
                fullWidth
                variant="outlined"
                InputLabelProps={{
                  sx: { fontFamily: "Poppins", fontSize: { xs: "1rem" } },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Phone number"
                required
                size="small"
                fullWidth
                name="phone"
                onChange={onChangeHandler}
                value={data.phone}
                variant="outlined"
                InputLabelProps={{
                  sx: { fontFamily: "Poppins", fontSize: { xs: "1rem" } },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Street"
                required
                name="street"
                onChange={onChangeHandler}
                value={data.street}
                size="small"
                fullWidth
                variant="outlined"
                InputLabelProps={{
                  sx: { fontFamily: "Poppins", fontSize: { xs: "1rem" } },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Landmark"
                required
                size="small"
                name="landmark"
                onChange={onChangeHandler}
                value={data.landmark}
                sx={{ width: "100%" }}
                variant="outlined"
                InputLabelProps={{
                  sx: {
                    fontFamily: "Poppins" /* add other font properties here */,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Pincode"
                required
                name="pincode"
                onChange={onChangeHandler}
                value={data.pincode}
                size="small"
                sx={{ width: "100%" }}
                variant="outlined"
                InputLabelProps={{
                  sx: {
                    fontFamily: "Poppins" /* add other font properties here */,
                  },
                }}
              />
            </Grid>



            <Grid item xs={12} sm={6}>
              <TextField
                label="City"
                required
                name="city"
                onChange={onChangeHandler}
                value={data.city}
                size="small"
                sx={{ width: "100%" }}
                variant="outlined"
                InputLabelProps={{
                  sx: {
                    fontFamily: "Poppins" /* add other font properties here */,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="State"
                required
                name="state"
                onChange={onChangeHandler}
                value={data.state}
                size="small"
                sx={{ width: "100%" }}
                variant="outlined"
                InputLabelProps={{
                  sx: {
                    fontFamily: "Poppins" /* add other font properties here */,
                  },
                }}
              />
            </Grid>


            
          </Grid>

         
        </Grid>
        <Grid xs={12} md={6} sx={{mt:{xs: 2, md: 0} ,p: { xs: 0, md: 2 },px: { xs: 0, md: 5 } }}>

        <h1 className="poppins-bold">Cart Total</h1>
          <Box sx={{ p: 4, pt: 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3 className="poppins-light">Subtotal</h3>
              <h3 className="poppins-light" style={{ textAlign: "right" }}>
              ₹ {getTotalCartAmount()}
              </h3>{" "}
              {/* Example amount */}
            </div>
            <Divider
              sx={{ border: "1.5px solid #A5D7E8" }}
              variant="fullWidth"
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3 className="poppins-light">Delivery fee</h3>
              <h3 className="poppins-light" style={{ textAlign: "right" }}>
              ₹ 35.00
              </h3>{" "}
              {/* Example amount */}
            </div>
            <Divider
              sx={{ border: "1.5px solid #A5D7E8" }}
              variant="fullWidth"
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3 className="poppins-light">Tax</h3>
              <h3 className="poppins-light" style={{ textAlign: "right" }}>
              ₹ 5.00
              </h3>{" "}
              {/* Example amount */}
            </div>
            <Divider
              sx={{ border: "1.5px solid #A5D7E8" }}
              variant="fullWidth"
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3 className="poppins-medium">Total</h3>
              <h3 className="poppins-medium" style={{ textAlign: "right" }}>
              ₹ {getTotalCartAmount()+40}
              </h3>{" "}
            


            </div>

         

            <Button
              className="poppins-semibold"
              sx={{
                borderRadius: "20px",
                mt: { xs: 0, md: 3 },
                mx: "auto",
                color: "#fff",
                backgroundColor: "#576CBC",
              }}
              variant="contained"
              size="large"
              type="submit"
              
            >
              Proceed to Payment
            </Button>
          </Box>

        </Grid>
      </Grid>
      </form>
    </div>
    
  );
};

export default PlaceOrder;
