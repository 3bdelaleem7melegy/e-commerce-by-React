/* eslint-disable no-unused-vars */
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import { useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import BoyIcon from '@mui/icons-material/Boy';
import MaleIcon from '@mui/icons-material/Male';





const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

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
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, fontSize: 17, textAlign: "center" }}
            >
              About
            </Typography>

            <Avatar alt="Remy Sharp" src="/img/IMG_20230216_035602_989.jpg" />
            <Typography sx={{ ml: 2 }}>AbdelAleem</Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            display: { xs: "block", sm: "block" },
            bgcolor: "background.black",
            width: `${drawerWidth}px`,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: `${drawerWidth}px`,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <Typography variant="h4" color="initial" sx={{ mr: 6 }}>
              List
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon sx={{ fontSize: 35 }} />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <Divider />
          <Divider />
          <Divider />
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/");
                }}
              >
                <ListItemIcon>
                  <HeadphonesIcon />
                </ListItemIcon>
                <ListItemText className="divv" primary="Shop Elecectronics" />
              </ListItemButton>
            </ListItem>
          </List>

          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/ShopCars");
                }}
              >
                <ListItemIcon>
                  <CarCrashIcon />
                </ListItemIcon>
                <ListItemText className="divv" primary="Shop Cars" />
              </ListItemButton>
            </ListItem>
          </List>
<List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/ShopWears");
                }}
              >
                <ListItemIcon>
                  <BoyIcon />
                </ListItemIcon>
                <ListItemText className="divv" primary="ShopWears" />
              </ListItemButton>
            </ListItem>
          </List>
          <Typography variant="body1" color="initial" sx={{ display: "flex", justifyContent: "center",mt:50,ml:1,fontSize:17 }}>Developed by:3bdelAleemmelegy 2023</Typography>

        </Drawer>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Avatar
          alt="Remy Sharp"
          src="/img/IMG_20230216_035602_989.jpg"
          sx={{ width: 300, height: 300,mt:12 }}
          
        />
      </Box>
      <br></br>
      <Box sx={{ display: "flex", justifyContent: "center"}}>
      <p>  <Typography variant="body1" color="initial" sx={{ fontSize: 20}}>Name : AbdelAleem Melegy</Typography>
    <br></br>
      <Typography variant="body1" color="initial" sx={{ fontSize: 20}}>Email : Abdualaleemlimo@gmail.com</Typography> 
      <br></br>
      <Typography variant="body1" color="initial" sx={{ fontSize: 20}}>Number : 01068037451</Typography> 
      </p>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center",mr:19}}>
        <IconButton >
        <MaleIcon sx={{fontSize:45}} />
        <Typography variant="body1" color="initial" sx={{ fontSize: 30}}> : Male</Typography> 
        </IconButton>
      

        
      </Box>
      

    </>
  );
}
