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
import HeadphonesIcon from "@mui/icons-material/Headphones";
import {  useNavigate } from "react-router-dom";
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



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
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
              Shop Cars
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

          {/* <Toolbar /> */}
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
                <ListItemText className="divv" primary="Shop Electronics" />
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
        <Card sx={{ maxWidth: 500, mt: 9,  display: { xs: "block" } }}>
          <CardMedia
            sx={{ height: 200 }}
            image="/img/20191016113123_bmw-2-series-gran-coupe-9.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              BMW
            </Typography>
            <Typography variant="body2">
              The design of the BMW X3. Harmonious proportions, powerful
              contours and the extreme emphasis on width of the front and rear
              view join up to produce a lasting appearance – and one that is
              also impressively continued in the redesigned, exclusive interior.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ display: "flex", justifyContent: "center", ml: "auto" }}
              onClick={() => {
                navigate("/DetailsCar1");
              }}
              size="small"
            >
              Details
            </Button>
          </CardActions>
        </Card>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 500, mt: 2,  display: { xs: "block" } }}>
          <CardMedia
            sx={{ height: 200 }}
            image="/img/23c0191-028-64a20af15d197.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              Mercedes
            </Typography>
            <Typography variant="body2">
              At one point, Mercedes-Benz had coupe and convertible variants for
              the C-class, E-class, and S-class. Now, in the process of trimming
              the lineup, Mercedes has blended the first two together, and the
              result is the 2024 CLE-class. With a footprint closer to the old
              E-class coupe, two available powertrains, and all manner of
              standard cabin tech, the CLE-class carries all the latest and
              greatest features Mercedes has to offer in a slick two-door form
              factor. Models wearing the CLE300 badge are powered by a 255-hp
              turbocharged four-cylinder while CLE450s get a 375-hp turbocharged
              inline-six. When the CLE-class goes on sale, which we expect will
              be sometime toward the end of 2023, it will go head-to-head with
              rivals such as the Audi A5 and the BMW 4-series.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ display: "flex", justifyContent: "center", ml: "auto" }}
              onClick={() => {
                navigate("/DetailsCar2");
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
