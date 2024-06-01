import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useContext,useState } from "react";
import { StoreContext } from "../context/StoreContext";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../assets/Logo.png";
import { Link, NavLink, useHref, useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { Badge,Checkbox } from "@mui/material";
import axios from 'axios';


const pages = ["Home", "Menu", "Blog"];
const settings = ["Profile", "My Order", "Dashboard", "Logout"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",
  width: 400,

  bgcolor: "background.paper",
  border: "1px solid #fff",
  borderRadius: "20px",
  boxShadow: 24,
  p: 6,
  "@media (max-width:600px)": {
    width: 300,
    p: 4,
  },
};

function ResponsiveAppBar() {

  const {url,setToken} =useContext(StoreContext)


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [activePage, setActivePage] = React.useState(pages[0]);
  const [open, setOpen] = React.useState(false);
  const [haveacc, sethaveacc] = React.useState(true);
  const [showLogin, setshowLogin] = React.useState(() => {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  });
  


  const {  cartItems } = useContext(StoreContext);

  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (e)=>{
    const name=e.target.name;
    const value= e.target.value;
    setData(data=>({...data,[name]:value}))
  }

const onLogin= async (e)=>{
  
  let newUrl=url;
  if (haveacc)
    {
      newUrl+="/api/user/login"
    }
    else{
      newUrl+="/api/user/register"

    }

        const response =await axios.post(newUrl,data);
        if (response.data.success){
          setToken(response.data.token);
          localStorage.setItem("token",response.data.token);
          sethaveacc(false)
          setOpen(false)
         setshowLogin(true);

        }
        else{
          alert(response.data.message)
          
          setOpen(false)
        }
        navigate(0);
}




  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const clickhere=(e)=>{
    sethaveacc(!haveacc)
  }


  const navigate =useNavigate();

  const handleClick = (setting) => {
    handleCloseUserMenu(); // Close the menu
    if (setting === "Logout") {
      // Handle logout logic here
      // For example:
      localStorage.removeItem("token");
      setToken("");
      setshowLogin(false); // Call a function to log the user out
      navigate(0)
    }

    if (setting === "My Order") {
      // Handle logout logic here
      // For example:
     navigate("/myorders")
    }
  };




  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", color: "black", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to={"/"}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                padding: 1.7,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={Logo} style={{ height: "5em" }} />
            </Typography>
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{ background: "white", color: "black" }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={Logo} style={{ height: "3rem" }} />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {pages.map((page) => (
              <NavLink
                style={{ borderBottom: "none", textDecoration: "none" }}
                to={`/${page.toLowerCase()}`}
              >
                {" "}
                <Button
                  key={page}
                  onClick={() => {
                    setActivePage(page);
                    handleCloseNavMenu();
                  }}
                  sx={{
                    color: "#576CBC",
                    display: "block",
                    paddingInline: 5,
                    mt: 6,
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: "800",
                    fontSize: "1.2em",
                    "&:hover": {
                      color: "#A5D7E8",
                    },
                    transition: "border-bottom 0.5s linear",
                    borderRadius: "20px",
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",
                    borderBottom:
                      activePage === page ? "4px solid #A5D7E8" : "none",
                  }}
                >
                  {page}
                </Button>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ paddingInline: 2,mr:2 }}>
         <Link to='/cart'>  <Badge badgeContent={Object.keys(cartItems).length } color="primary"> <ShoppingCartIcon sx={{fontSize:'1.8rem',color:'#576CBC'}} /></Badge></Link> 
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{ background: "#A5D7E8" }}
                  alt=""
                  src="/static/images/avatar/2.jpg"
                />
                {/* <Avatar sx={{background:'#A5D7E8'}} alt="" src="" /> */}
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {showLogin ? (
                settings.map((setting) => (
                  <MenuItem key={setting} onClick={() => { handleCloseUserMenu(); handleClick(setting);}}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))
              ) : 
              (
                <MenuItem key="Sign in" onClick={handleOpen}>
                  <Typography textAlign="center">Sign in</Typography>
                </MenuItem>
              )}
              
            </Menu>
          </Box>

          {!haveacc?
          <div>
          {/* <Button onClick={handleOpen}>Open modal</Button> */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ animation: "ease-in-out 3s", transition: "ease-in-out" }}
          >
            <Box sx={style}>
              <IconButton
                aria-label="Close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: 30,
                  right: 20,
                  color: "red",
                }}
              >
                <CloseIcon />
              </IconButton>
              <Typography
                className="poppins-semibold"
                id="modal-modal-title"
                variant="h6"
                component="h1"
              >
                Sign Up
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <TextField
                  sx={{ my: 1 }}
                  id="standard-basic"
                  fullWidth
                  label="Name"
                  variant="standard"
                  name="name"
                  onChange={onChangeHandler}
                  value={data.name}
                />
                <TextField
                  sx={{ my: 1 }}
                  id="standard-basic"
                  fullWidth
                  label="Email Id"
                  variant="standard"
                  name="email"
                  onChange={onChangeHandler}
                  value={data.email}
                />
                <TextField
                  sx={{ my: 1 }}
                  id="standard-basic"
                  fullWidth
                  label="Password"
                  variant="standard"
                  name="password"
                  onChange={onChangeHandler}
                  value={data.password}
                />
                <Typography
                  className="poppins-mediumc"
                  sx={{mt:2,marginInline:-1.5 }}
                  
                > <Checkbox/> I accept the terms of use and privacy policy </Typography>
   
                
                <Typography
                  className="poppins-semibold"
                  sx={{ textAlign: "center" }}
                >
                  <Button
                    className="poppins-semibold"
                    sx={{
                      borderRadius: "20px",
                      mt: 3,
                      mx: "auto",
                      color: "#white",
                      backgroundColor: "#576CBC",
                    }}
                    variant="contained"
                    fullWidth
                    onClick={async () => {
                      
                      await onLogin();
                    }}
                    
                  >
                    Sign Up
                  </Button>
                </Typography>
              </Typography>
              <Typography
                  className="poppins-light" sx={{mt:5,fontSize:'0.8rem'}}>
                    Already have an account ? <Button  className="poppins-light" ><Typography sx={{textDecoration:'none',fontSize:'0.8rem',fontStyle:'normal',textTransform: 'none', color:'#576CBC' ,fontWeight:'bold'}} onClick={clickhere}>Click Here</Typography></Button> 


                  </Typography>
            </Box>
          </Modal>
        </div>
        :

        //Login

        <div>
          {/* <Button onClick={handleOpen}>Open modal</Button> */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ animation: "ease-in-out 3s", transition: "ease-in-out" }}
          >
            <Box sx={style}>
              <IconButton
                aria-label="Close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: 30,
                  right: 20,
                  color: "red",
                }}
              >
                <CloseIcon />
              </IconButton>
              <Typography
                className="poppins-semibold"
                id="modal-modal-title"
                variant="h6"
                component="h1"
              >
                Sign In
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               
                <TextField
                  sx={{ my: 1 }}
                  id="standard-basic"
                  fullWidth
                  label="Email Id"
                  variant="standard"
                  inputProps={{
                    type: "email",
                  }}

                  name="email"
                  onChange={onChangeHandler}
                  value={data.email}
                />
                <TextField
                  sx={{ my: 1 }}
                  id="standard-basic"
                  fullWidth
                  label="Password"
                  variant="standard"
                  type="password"
                  name="password"
                  onChange={onChangeHandler}
                  value={data.password}
                />
               
   
                
                <Typography
                  className="poppins-semibold"
                  sx={{ textAlign: "center" }}
                >
                  <Button
                    className="poppins-semibold"
                    sx={{
                      borderRadius: "10px",
                      mt: 3,
                      mx: "auto",
                      color: "#white",
                      backgroundColor: "#576CBC",
                    }}
                    variant="contained"
                    fullWidth
                    onClick={async () => {
                      
                      await onLogin();
                    }}
                  >
                    Sign In
                  </Button>
                </Typography>
              </Typography>
              <Typography
                  className="poppins-light" sx={{mt:5,fontSize:'0.8rem'}}>
                    Don't have an account ?<Button  className="poppins-light" ><Typography sx={{fontSize:'0.8rem',fontStyle:'normal',textTransform: 'none',textDecoration:'underline' ,color:'#576CBC',fontWeight:'bold'}} onClick={clickhere}>Click Here</Typography></Button> 

                  </Typography>
            </Box>
          </Modal>
        </div>
        }
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
