import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { Box, CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";

export default function Root() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <SideBar setMode={setMode} />
        <Box sx={{ ml: "240px", display: "flex", justifyContent: "center" }}>
          <Outlet />
        </Box>
      </ThemeProvider>
    </div>
  );
}
