import { Box, Paper, Typography, IconButton } from "@mui/material";
import "./Home.css";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const Home = () => {
  return (
    <Box sx={{ mt: "100px" }}>
      <Paper
        sx={{
          position: "relative",
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          mt: "22px",
          pt: "27px",
          pb: "7px",
        }}
      >
        <Typography sx={{ ml: "16px" }} variant="h6">
          GYM
        </Typography>
        <Typography sx={{ mr: "33px", opacity: "0.8" }} variant="h6">
          $100
        </Typography>
        <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
          <CloseIcon sx={{ fontSize: "16px" }} />
        </IconButton>
      </Paper>
      <Paper
        sx={{
          position: "relative",
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          mt: "22px",
          pt: "27px",
          pb: "7px",
        }}
      >
        <Typography sx={{ ml: "16px" }} variant="h6">
          GYM
        </Typography>
        <Typography sx={{ mr: "33px", opacity: "0.8" }} variant="h6">
          $100
        </Typography>
        <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
          <CloseIcon sx={{ fontSize: "16px" }} />
        </IconButton>
      </Paper>
      <Paper
        sx={{
          position: "relative",
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          mt: "22px",
          pt: "27px",
          pb: "7px",
        }}
      >
        <Typography sx={{ ml: "16px" }} variant="h6">
          GYM
        </Typography>
        <Typography sx={{ mr: "33px", opacity: "0.8" }} variant="h6">
          $100
        </Typography>
        <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
          <CloseIcon sx={{ fontSize: "16px" }} />
        </IconButton>
      </Paper>
      <Paper
        sx={{
          position: "relative",
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          mt: "22px",
          pt: "27px",
          pb: "7px",
        }}
      >
        <Typography sx={{ ml: "16px" }} variant="h6">
          GYM
        </Typography>
        <Typography sx={{ mr: "33px", opacity: "0.8" }} variant="h6">
          $100
        </Typography>
        <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
          <CloseIcon sx={{ fontSize: "16px" }} />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default Home;
