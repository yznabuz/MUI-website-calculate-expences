import { Box, Typography } from "@mui/material";
import LogoDevIcon from "@mui/icons-material/LogoDev";

export default function Footer() {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          height: "75px",
          backgroundColor: "#f0f0f0",
          display: "flex",
          justifyContent: "space-between",
          mt: "250px",
        }}
      >
        <LogoDevIcon />
        <Typography variant="body1">Develop it with ❤️ by yzn</Typography>
      </Box>
    </div>
  );
}
