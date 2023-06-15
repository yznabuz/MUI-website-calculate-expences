import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { Box } from "@mui/material";

export default function Root() {
  return (
    <div>
      <Header />
      <SideBar />
      <Box sx={{ ml: "240px", display: "flex", justifyContent: "center" }}>
        <Outlet />
      </Box>
    </div>
  );
}
