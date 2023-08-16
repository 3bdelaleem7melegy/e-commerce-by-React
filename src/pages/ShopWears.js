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
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

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
              Shop Wears
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
        </Drawer>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 500, mt: 9, display: { xs: "block" } }}>
          <CardMedia sx={{ height: 200 }} image="/img/IctkWUk.jpg" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               ملابس تستحق الارتداء
            </Typography>
            <Typography variant="body2">
            <p>100 day return policy,
              FREE SHIPPING OVER 30$

              Delivered within 4 - 7 working days</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ display: "flex", justifyContent: "center", ml: "auto" }}
              onClick={() => {
                navigate("/DetailsWears1");
              }}
              size="small"
            >
              Details
            </Button>
          </CardActions>
        </Card>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 500, mt: 3, display: { xs: "block" } }}>
          <CardMedia sx={{ height: 200 }} image="/img/2023.jpg" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             ملابس تستحق الارتداء
            </Typography>
            <Typography variant="body2">
            <p>طقم ملابس رجالي موضة 2023 طقم بدلة رجالي صيفي مطبوع بأكمام قصيرة مكون من تسع نقاط سروال مكون من قطعتين ملابس المراهقين للرجال</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ display: "flex", justifyContent: "center", ml: "auto" }}
              onClick={() => {
                navigate("/DetailsWears2");
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
