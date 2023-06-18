import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { Box, CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";

export default function Root() {
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );

  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            btnC: {
              main: "#1565c0",
            },
          }
        : {
            // palette values for dark mode
            btnC: {
              main: "orange",
            },
          }),
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
