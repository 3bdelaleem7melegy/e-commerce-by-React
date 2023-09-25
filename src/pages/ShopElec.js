
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
import { styled,useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BoyIcon from '@mui/icons-material/Boy';

const drawerWidth = 240;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
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
            ml: { xs: 0 } 
            

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
              Shop Electronics
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
        
          
          <DrawerHeader >
          <Typography variant="h4" color="initial" sx={{ mr: 6 }}>
            List
          </Typography>
          <IconButton  onClick={handleDrawerClose}  >
            {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{ fontSize: 35 }} /> : <ChevronRightIcon  />}
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
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/About");
                }}
              >
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText className="divv" primary="About" />
              </ListItemButton>
            </ListItem>
          </List>
        <Typography variant="body1" color="initial" sx={{ display: "flex", justifyContent: "center",mt:50,ml:1,fontSize:17 }}>Developed by:3bdelAleemmelegy 2023</Typography>
        </Drawer>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 500, mt: 9, display: { xs: "block" } }}>
          <CardMedia sx={{ height: 200 }} image="/img/download.jpg" />
          <CardContent>
            <Typography gutterBottom variant="h3" >
              Airpods
            </Typography>
            <Typography >
              <p> اللاسلكية Bluetoothتكنولوجيا 5.3 </p>
              مقاومة للعرق والماء
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ display: "flex", justifyContent: "center", ml: "auto" }}
              onClick={() => {
                navigate("/DetailsElec");
              }}
              size="small"
            >
              Details
            </Button>
          </CardActions>
        </Card>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 500, mt: 2, display: { xs: "block" } }}>
          <CardMedia sx={{ height: 200 }} image="/img/headset.png" />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              head Phone
            </Typography>
            <Typography >
              <p> سماعة فوق الأذن اذن لاسلكية سودو </p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ display: "flex", justifyContent: "center", ml: "auto" }}
              onClick={() => {
                navigate("/DetailsElec2");
              }}
              size="small"
            >
              Details
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

