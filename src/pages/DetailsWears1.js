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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

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
              sx={{ color: "white" }}
              onClick={() => {
                navigate("/ShopWears");
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, fontSize: 25, textAlign: "center" }}
            >
              Details
            </Typography>
            <Avatar alt="Remy Sharp" src="/img/IMG_20230216_035602_989.jpg" />
            <Typography sx={{ ml: 2 }}>AbdelAleem</Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ImageList
          sx={{
            width: 500,
            height: 400,
            mt: 9,
            ml: 0,
            display: { xs: "block" },
          }}
          cols={0}
        >
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
        <Typography sx={{ display: { xs: "block" } }}>
          <h1>Price :2000$</h1>
          <h3>العلامه التجاريه : Wears</h3>
          <Stack spacing={1}>
            <Rating name="size-medium" defaultValue={2} />
          </Stack>
          <h1>Review list</h1>
          <ul>
            <li>
              <h3>The product is great, I bought it for the third time</h3>
            </li>
            <li>
              <h3>
                The product is wonderful exactly as described,quick shipping,
                thanks
              </h3>
            </li>
            <li>
              <h3>
                The goods are very good, the quality is very cheap, and the
                express delivery is fast
              </h3>
            </li>
            <li>
              <h3>
                I received it, the quality is very good, and it is very
                convenient to use
              </h3>
            </li>
            <li>
              <h3>Great. It would be the best investment that I can do</h3>
            </li>
            <li>
              <h3>
                The product is wonderful exactly as described,quick shipping,
                thanks
              </h3>
            </li>
            <li>
              <h3>
                It is a very happy thing to buy your favorite baby, and the
                quality is very good
              </h3>
            </li>
            <li>
              <h3>
                I like this color and I choose this item! The service is
                perfect!!!
              </h3>
            </li>
            <li>
              <h3>
                High quality! Excellent quality! There are many styles of items
                in the store, love!
              </h3>
            </li>
          </ul>
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>
          <h3>
            <p>For more Details , You can call these number</p>
          </h3>
          <h3>01068037451</h3>
          <h3>01009202819</h3>
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" onClick={() => {
              navigate("/PaymentWear1");
              
            }}>Payment</Button>
        </Box>
    </>
  );
}

const itemData = [
  {
    img: "/img/IctkWUk.jpg",
    title: "Breakfast",
  },
  {
    img: "/img/OIqM5fo.jpg",
    title: "Breakfast",
  },
  {
    img: "/img/QNjNT6p.jpg",
    title: "Breakfast",
  },
  {
    img: "/img/QSFmJgy.jpg",
    title: "Breakfast",
  },
];
