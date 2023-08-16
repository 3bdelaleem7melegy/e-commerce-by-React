/* eslint-disable no-unused-vars */
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


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
          ml: { xs: 0 },
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
          <Typography variant="h6" sx={{ flexGrow: 1,fontSize:25,textAlign:"center" }}>
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
      <Typography >
        <h1 >Price :50000$</h1>
        <h3>العلامه التجاريه : BMW </h3>
        
        <Stack spacing={1}>
      <Rating name="size-medium" defaultValue={2} />
    </Stack>
    
        <h1 >Edmunds' Expert Review</h1>
        <h1 >Pros</h1>
        <ul>
        
          <li><h3>performance and fuel economy from any of its three available engines.</h3></li>
          <li><h3>high-quality cabin looks and feels expensive.</h3></li>
          <li><h3>generous passenger and cargo room for the segment.</h3></li>
          <li><h3>responsive handling bettered only by pricier sport-tuned rivals.</h3></li>
          <li><h3>top-notch crash-test scores.</h3></li>
        </ul>
        
        </Typography>
        </Box>
  
        <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography >
        
        <h2> Details :</h2>
        <h3>Performance & mpg :
          Every 2016 BMW X3 comes with an eight-speed automatic transmission and an automatic stop-start system. The latter saves fuel by shutting off the engine when you come to a stop and then starting it when you take your foot off the brake. Note that in BMW-speak, sDrive equals rear-wheel drive, while xDrive equals all-wheel drive</h3>
        <h3>
        Safety:
Every 2016 BMW X3 comes standard with antilock disc brakes, stability and traction control, automatic brake drying (useful in rainy weather), front-seat side airbags, full-length side curtain airbags and active front seat head restraints. Also standard is the BMW Assist emergency communications system, which provides automatic crash notification and on-demand roadside assistance.

The optional BMW Remote Services system upgrades BMW Assist with remote door unlocking, GPS vehicle location and additional features that can be operated via the My BMW Remote smartphone app. Other optional equipment includes front and rear parking sensors, an active blind-spot monitor, a forward collision mitigation system with automatic braking, rearview and surround-view parking cameras and a lane-departure warning system.

In Edmunds brake testing, an xDrive35i stopped from 60 mph in 123 feet, which is an average distance for the segment. An xDrive28i with 19-inch wheels stopped in 127 feet.

In government crash testing, the X3 received five out of five stars in overall crash protection, with five stars for frontal crash protection and side impact protection. In crash testing by the Insurance Institute for Highway Safety, the X3 received the highest possible rating of "Good" in the moderate-overlap frontal-offset, side-impact and roof strength tests. Its seat/head restraint design was also rated "Good" for whiplash protection in rear impacts.
        </h3>
        <h3><p>For more Details , You can call these number</p></h3>
        <h3>01068037451</h3>
        <h3>01009202819</h3>
        </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" onClick={() => {
              navigate("/PaymentCar1");
              
            }}>Payment</Button>
        </Box>

        </>
        
      
  );
}


const itemData = [
  {
    img: '/img/20191016113123_bmw-2-series-gran-coupe-9.jpg',
    title: 'Breakfast',
  },
  {
    img: '/img/20191016113123_bmw-2-series-gran-coupe-10.jpg',
    title: 'Burger',
  },
  {
    img: '/img/20191016113124_bmw-2-series-gran-coupe-11.jpg',
    title: 'Camera',
  },
  {
    img: '/img/20191016113124_bmw-2-series-gran-coupe-12.jpg',
    title: 'Coffee',
  },


];
