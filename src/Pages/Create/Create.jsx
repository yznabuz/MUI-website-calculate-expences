import {
  Box,
  Button,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";
import "./Create.css";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const nav = useNavigate();

  function sendData() {
    fetch("http://localhost:3001/mydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, price }),
    });
    nav("/");
  }
  const theme = useTheme();
  return (
    <Box sx={{ mt: "100px", width: "360px" }}>
      <TextField
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        fullWidth={true}
        label="Transaction Name"
        id="outlined-start-adornment"
        sx={{ mb: "30px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />
      <TextField
        onChange={(e) => {
          setPrice(Number(e.target.value));
        }}
        fullWidth={true}
        label="Transaction Amount"
        id="outlined-start-adornment"
        sx={{ display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <Button
        fullWidth={true}
        onClick={sendData}
        sx={{
          marginTop: "50px",
          backgroundColor: theme.palette.btnC.main,
          "&:hover": {
            backgroundColor: theme.palette.btnC.hover,
          },
        }}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </Box>
  );
};

export default Create;
