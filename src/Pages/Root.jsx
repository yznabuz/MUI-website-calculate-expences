import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import { Box, CssBaseline, createTheme } from "@mui/material";
// import { ThemeProvider } from "@emotion/react";
import { useMemo, useState } from "react";
import getDesignTokens from "../Style/Theme";
import Footer from "./Components/Footer";

export default function Root() {
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <div>
      <CssBaseline />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
