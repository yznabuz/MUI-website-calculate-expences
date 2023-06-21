import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <LogoDevIcon />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to={"/"}>
              <Button
                sx={{ textDecoration: "none", color: "white" }}
                className="btn"
                color="inherit"
              >
                Home
              </Button>
            </Link>
            <Link to={"/"}>
              <Button
                sx={{ textDecoration: "none", color: "white" }}
                className="btn"
                color="inherit"
              >
                Products
              </Button>
            </Link>
            <Link to={"/"}>
              <Button
                sx={{ textDecoration: "none", color: "white" }}
                className="btn"
                color="inherit"
              >
                Recommended
              </Button>
            </Link>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton sx={{ mr: "16px", color: "inherit" }}>
            <ShoppingCartIcon />
          </IconButton>
          <Link to={"/Login"}>
            <Button
              sx={{ textDecoration: "none", color: "white" }}
              className="btn"
              color="inherit"
            >
              Login
            </Button>
          </Link>
          <Link to={"/Signup"}>
            <Button
              sx={{ textDecoration: "none", color: "white" }}
              className="btn"
              color="inherit"
            >
              Sign Up
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
