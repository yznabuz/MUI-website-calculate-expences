import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { Box, CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useMemo, useState } from "react";
import getDesignTokens from "../Style/Theme";

export default function Root() {
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );

  const [drw, setDrw] = useState("none");
  const [drwHide, setDrwHide] = useState("permanent");

  function openDrawe() {
    setDrw("block");
    setDrwHide("temporary");
  }

  function hideDrawe() {
    setDrw("none");
    setDrwHide("permanent");
  }
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header openDrawe={openDrawe} />
        <SideBar
          drw={drw}
          setMode={setMode}
          drwHide={drwHide}
          hideDrawe={hideDrawe}
        />
        <Box sx={{ ml: "240px", display: "flex", justifyContent: "center" }}>
          <Outlet />
        </Box>
      </ThemeProvider>
    </div>
  );
}
