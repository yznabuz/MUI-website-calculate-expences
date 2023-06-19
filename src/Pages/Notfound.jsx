import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

export default function Notfound() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "70vh",
      }}
    >
      <Typography variant="h1" sx={{ color: theme.palette.error.contrasttext }}>
        404
      </Typography>
      <Typography variant="h6" sx={{ color: theme.palette.error.contrasttext }}>
        The page you’re looking for doesn’t exist.
      </Typography>

      <Link to={"/"}>
        <Button
          sx={{
            mt: "30px",
            backgroundColor: theme.palette.warning.main,
            "&:hover": {
              backgroundColor: theme.palette.warning.light,
            },
          }}
          variant="contained"
        >
          Back Home
        </Button>
      </Link>
    </Box>
  );
}
