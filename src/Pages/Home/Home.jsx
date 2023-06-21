import "./Home.css";
import * as React from "react";
import Box from "@mui/material/Box";
import {
  Card,
  CardMedia,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Card sx={{ width: "100%", m: "16px" }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
        </Card>
        <Container sx={{ maxWidth: "100%",display: "flex", justifyContent: "space-between" }}>
          <Typography>Recommnded</Typography>
          <Link to='/' style={{color:"black"}}>
          <Typography> See All</Typography></Link>
        </Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: "16px",
            },
          }}
        >
          <Card sx={{ width: 200 }}>
            <CardMedia
              sx={{ height: 160 }}
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <IconButton aria-label="add to cart">
              <AddShoppingCartIcon />
            </IconButton>{" "}
            <IconButton aria-label="add to cart">
              <FavoriteBorderIcon />{" "}
            </IconButton>
          </Card>
          <Card sx={{ width: 200 }}>
            <CardMedia
              sx={{ height: 160 }}
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <IconButton aria-label="add to cart">
              <AddShoppingCartIcon />
            </IconButton>{" "}
            <IconButton aria-label="add to cart">
              <FavoriteBorderIcon />{" "}
            </IconButton>
          </Card>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
