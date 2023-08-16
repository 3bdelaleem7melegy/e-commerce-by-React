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
              navigate("/");
              
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

          <ImageList sx={{ width: 400, height: 400 ,mt:9,ml:0,  display: { xs: "block"}}} cols={0} >
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
        <h1 >Price :1000$</h1>
        <h3>العلامه التجاريه : AirPods</h3>
        <Stack spacing={1}>
      <Rating name="size-medium" defaultValue={2} />
    </Stack>
        <h1 >تكنولوجيا الصوت</h1>
        <ul>
        
          <li><h3>محرك مخصص بتمدد عالٍ من تصميم </h3></li>
          <li><h3>مضخم صوت مخصص ذو نطاق ديناميكي عالٍ</h3></li>
          <li><h3>شفافية الصوت المتكيّفة</h3></li>
          <li><h3>نظام فتحات هوائية لموازنة الضغط</h3></li>
        </ul>
        
        </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>

        <Typography >
          <h1 >الشريحة</h1>
        <ul>
          <li><h3>شريحه لسماعات الرأس </h3></li>
        </ul> 

        </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>

        <Typography >
        
        <h2> تسهيلات الاستخدام </h2>
        <h3>
          <ul>
            <li>صوت بالاستماع المباشر </li>
            <li>مستويات سماعات الرأس</li>
            <li>تعزيز المحادثة</li>

          </ul>
        </h3>
        
        <h3><p>للتفاصيل اكثر يمكنك التواصل علي هذه الارقام</p></h3>
        <h3>01068037451</h3>
        <h3>01009202819</h3>
        </Typography>

        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" onClick={() => {
              navigate("/PaymentElec1");
              
            }}>Payment</Button>
        </Box>
        
        </>
      
  );
}


const itemData = [
  {
    img: '/img/download.jpg',
    title: 'Breakfast',
  },



];
