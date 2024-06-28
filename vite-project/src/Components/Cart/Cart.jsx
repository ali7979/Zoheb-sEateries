import React, { useContext ,useEffect} from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import CartCard from "./CartCard";
import { Button, Box, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import NoFoodIcon from "@mui/icons-material/NoFood";
import { useNavigate } from "react-router-dom";
import WestIcon from '@mui/icons-material/West';const Cart = () => {
  const { foodlist, cartItems, removeCart,getTotalCartAmount,url } = useContext(StoreContext);
  let navigate=useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  window.scrollTo(0, 0);
  return (
    <div className="container" style={{ height: "80vh" }}>
      <Grid container sx={{ height: "80vh",mt:{ xs: 0, md: 4 } }}>
        <Grid xs={12} md={6} sx={{ px: { xs: 0, md: 4 }, pb: 0, mb: 0 }}>
          <h1 className="poppins-bold carttxxt"><Button className="backbtn" onClick={()=>{navigate("/")}} sx={{color:'black',display:"none"}}><WestIcon  /></Button> Cart</h1>
          {Object.keys(cartItems).length === 0 ? (
            <div
              style={{
                margin: "5rem auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2 className="poppins-light">
                Your cart is empty! Add some foods
              </h2>
              <div>
                <NoFoodIcon large sx={{ fontSize: "5rem", color: "#567CBC" }} />
              </div>
            </div>
          ) : (
            <div
              className="scrollcart"
              style={{
                marginTop: "1rem",
                marginInline:"-1rem",
                height: "60vh",
                overflow: "scroll",
                overflowX: "hidden",
                // Make scrollbar thin (for Firefox)
                msOverflowStyle: "none", // Hide scrollbar in IE
              }}
            >
              {foodlist.map((item, index) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <>
                      <CartCard
                        id={item._id}
                        name={item.name}
                        img={item.image}
                        price={item.price}
                        cartItems={cartItems}
                      />
                    </>
                  );
                }
              })}
            </div>
          )}
        </Grid>
        <Grid className="carttotal"   xs={12} md={6} sx={{ px: { xs: 0, md: 4 },py: { xs: 0, md: 2 }, my: { xs: 0, mt: 2 } }}>
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

            <div >
            <h4 className="poppins-light">If you have a Promocode , Enter it here</h4>
              
             
              <div className="promoinput poppins-regular">
                <input type="text" placeholder="Promo Code"/>
                <button className="poppins-regular" variant="contained">Apply</button>

              </div>

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
              onClick={()=>navigate('/order')}
            >
              Proceed to Payment{" "}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
