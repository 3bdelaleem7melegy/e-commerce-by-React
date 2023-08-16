/* eslint-disable no-unused-vars */
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";

const drawerWidth = 240;

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();

  return (
    <>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        open={open}
        sx={{
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { xs: 0},
          
        }}
      >
        <Toolbar>
          <IconButton
          sx={{color:"white"}}
          onClick={() => {
            navigate("/ShopCars");
            
          }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 ,fontSize:25,textAlign:"center"}}>
            Details
          </Typography>
          <Avatar alt="Remy Sharp" src="/img/IMG_20230216_035602_989.jpg" />
          <Typography sx={{ ml: 2 }}>AbdelAleem</Typography>

        </Toolbar>
      </AppBar>
      
    
    </Box>
    <Box sx={{ display: "flex", justifyContent: "center" }}>
    <ImageList sx={{ width: 600, height: 500 ,mt:9,ml:0,  display: { xs: "block"}}} cols={1} >
    {itemData.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={`${item.img}`}
          srcSet={`${item.img}`}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
    </Box>
  

  <Box sx={{ display: "flex", justifyContent: "center" }}>
  <Typography sx={{ display: { xs: "block"}}}>
  <h1 >Price : 60000$</h1>
  <h3>العلامه التجاريه : Mercedes </h3>
        <Stack spacing={1}>
      <Rating name="size-medium" defaultValue={2} />
    </Stack>
  <h1>Overview</h1>
  <h3>
  At one point, Mercedes-Benz had coupe and convertible variants for the C-class, E-class, and S-class. Now, in the process of trimming the lineup, Mercedes has blended the first two together, and the result is the 2024 CLE-class. With a footprint closer to the old E-class coupe, two available powertrains, and all manner of standard cabin tech, the CLE-class carries all the latest and greatest features Mercedes has to offer in a slick two-door form factor. Models wearing the CLE300 badge are powered by a 255-hp turbocharged four-cylinder while CLE450s get a 375-hp turbocharged inline-six. When the CLE-class goes on sale, which we expect will be sometime toward the end of 2023, it will go head-to-head with rivals such as the Audi A5 and the BMW 4-series.


  </h3>
  
  </Typography>
  </Box>

  <Box sx={{ display: "flex", justifyContent: "center" }}>
  <Typography >
  <h1>Engine, Transmission, and Performance</h1>
  <h3>
  The CLE-class comes with one of two powertrains. The CLE300 carries a turbocharged 2.0-liter inline-four, which is good for 255 horsepower and 295 pound-feet of torque, while the CLE450 bumps that up to a turbocharged 3.0-liter inline-six producing 375 horsepower and 369 pound-feet of torque. A nine-speed automatic transmission is standard on both models. Both powertrains are 48-volt hybrids, incorporating an electric motor that can add up to 23 horsepower and 148 pound-feet of torque, as well. Both the CLE300 and the CLE450 are limited to a top speed of 130 mph. When we get a chance to test drive the CLE-class for ourselves, we'll update this story with driving impressions.
  </h3>

  </Typography>

  </Box>

  <Box sx={{ display: "flex", justifyContent: "center" }}>
  <Typography >
  
  <h1> Safety and Driver-Assistance Features </h1>
  <h3>The CLE-class comes standard with automated emergency braking, lane-keeping assist, and a driver-attention monitor. An optional Driver Assistance Package beefs things up with adaptive cruise control, blind-spot monitoring, and more. For more information about the CLE-class's crash-test results, visit the National Highway Traffic Safety Administration (NHTSA) and Insurance Institute for Highway Safety (IIHS) websites. Key safety features include:
    <ul>
      <li>Standard forward-collision warning and automated emergency braking</li>
      <li>Standard lane-departure warning and lane-keeping assist</li>
      <li>Available adaptive cruise contro</li>
    </ul>
  </h3>
<h1>Warranty and Maintenance Coverage</h1>
  <h3>Mercedes-Benz provides competitive warranty coverage compared with premium rivals. However, the German automaker doesn't offer the complimentary maintenance that BMW and Jaguar do.</h3>
  <h3>
  <ul>
      <li>Limited warranty covers four years or 50,000 miles</li>
      <li>Powertrain warranty covers four years or 50,000 miles</li>
      <li>No complimentary scheduled maintenance</li>
    </ul>
  </h3>
    <h3>For more Details , You can call these number</h3>
  <h3>01068037451</h3>
  <h3>01009202819</h3>
  </Typography>
  </Box>
  <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" onClick={() => {
              navigate("/PaymentCar2");
              
            }}>Payment</Button>
        </Box>
  
  </>
  );
}

const itemData = [
  {
    img: '/img/23c0191-028-64a20af15d197.jpg',
    title: 'Breakfast',
  },
  {
    img: '/img/23c0191-012-64a20b123f259.jpg',
    title: 'Burger',
  },
  {
    img: '/img/23c0191-024-64a20b071beb2.jpg',
    title: 'Camera',
  },
  {
    img: '/img/23c0191-023-64a20b041b842.jpg',
    title: 'Coffee',
  },
  {
    img: '/img/23c0191-032-64a20ae714a14.jpg',
    title: 'Coffee',
  },


];
