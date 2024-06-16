import React from "react";
import contac from "../assets/contactus.svg";
import searchbarimg from "../assets/srchbar.gif";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";

import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate= useNavigate();


  const isFormValid = () => {
  
    return (
      data.name !== "" &&
    data.email !== "" &&
    data.message !== "" 
    );
  };

  const onChangeHandler = (e) => {
    
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const sendcontact = async () => {
    if (!isFormValid()) {
      alert("Please fill in all required fields.");
      return;
    }
    const srvcid = "service_zf3xyis";
    const publickey = "q0kW_HNghLfBQfD6Q";
    const templateid = "template_hwntiz6";

    const tempparams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    await emailjs
      .send(srvcid, templateid, tempparams, {
        publicKey: publickey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED", error);
        }
      );
      navigate("/thankyou");
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={5} sx={{ pt: 0, mt: "-3rem", mb: 0, pb: 0 }}>
          <img src={contac} />
        </Grid>

        <Grid item xs={12} md={7} sx={{ overflow: "hidden", mt: 2 }}>
          <Grid
            className="contactcard"
            sx={{
              marginInline: "2rem",
              padding: " 1rem 3rem 1rem 3rem",
              borderRadius: "2rem",
            }}
          >
            <h1 className="contacthead"> Contact Us</h1>
            <img src={searchbarimg} className="srchbar" />

            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <TextField
                onChange={onChangeHandler}
                value={data.name}
                name="name"
                id="standard-basic"
                label="Name"
                variant="standard"
                fullWidth
              />
              <TextField
                onChange={onChangeHandler}
                name="email"
                value={data.email}
                id="standard-basic"
                label="Email Id"
                variant="standard"
                fullWidth
              />
              <TextField
                id="outlined-multiline-static"
                label="Your Comments"
                name="message"
                multiline
                rows={4}
                onChange={onChangeHandler}
                value={data.message}
                fullWidth
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  onClick={sendcontact}
                  sx={{
                    background: "black",
                    borderRadius: "2rem",
                    padding:"0.6rem",
                    paddingInline: "6rem",
                    
                  }}
                >
                  Submit
                </Button>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Blog;
