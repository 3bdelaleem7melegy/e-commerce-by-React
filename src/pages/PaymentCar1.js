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
import TextField from '@mui/material/TextField';



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
              navigate("/DetailsCar1");
              
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1,fontSize:25,textAlign:"center" }}>
            Payment
          </Typography>
          <Avatar alt="Remy Sharp" src="/img/IMG_20230216_035602_989.jpg" />
          <Typography sx={{ ml: 2 }}>AbdelAleem</Typography>

        </Toolbar>
      </AppBar>
      
      
      
    </Box>

<Typography variant="body1"  sx={{ display: "flex", justifyContent: "center",mt:15,fontSize:25 }}>Credit Card</Typography>

     <Box sx={{ display: "flex", justifyContent: "center",mt:3 }}>
     <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Email Address"
        />
     </Box>
     <Box sx={{ display: "flex", justifyContent: "center",mt:3 }}>
     <TextField
          required
          // type="number"
          id="outlined-required"
          label="number"
          defaultValue="Card Number"
        />

     </Box>
     <Box sx={{ display: "flex", justifyContent: "center",mt:3 }}>
     <TextField
          required
          // type="number"
          id="outlined-required"
          label="number"
          defaultValue="MM/YY"
        />

     </Box>
     <Box sx={{ display: "flex", justifyContent: "center",mt:3 }}>
     <TextField
          required
          // type="number"
          id="outlined-required"
          label="number"
          defaultValue="CVC"
        />

     </Box>
     <Box sx={{ display: "flex", justifyContent: "center",mt:3 }}>
        <Button variant="contained" onClick={() => {
              navigate("/DetailsCar1");
              
            }}>Pay 50000$</Button>
        </Box>

        </>
      
  );
}



