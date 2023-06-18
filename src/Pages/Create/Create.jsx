import {
  Box,
  Button,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";
import "./Create.css";
import SendIcon from "@mui/icons-material/Send";

import React from "react";

const Create = () => {
  const theme = useTheme();
  return (
    <Box sx={{ mt: "100px", width: "360px" }}>
      <TextField
        fullWidth={true}
        label="Transaction Name"
        id="outlined-start-adornment"
        sx={{ ml: "22px", mb: "30px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />
      <TextField
        fullWidth={true}
        label="Transaction Amount"
        id="outlined-start-adornment"
        sx={{ ml: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <Button
        fullWidth={true}
        sx={{
          marginLeft: "22px",
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
