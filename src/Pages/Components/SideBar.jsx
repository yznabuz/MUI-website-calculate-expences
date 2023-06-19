import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import { Link, useLocation } from "react-router-dom";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@emotion/react";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const drawerWidth = 240;

export default function SideBar({ setMode, drw, drwHide, hideDrawe }) {
  const theme = useTheme();
  const currentLocation = useLocation();

  const myList = [
    { name: "Home", icon: <HomeIcon />, path: "/" },
    { name: "Create", icon: <CreateIcon />, path: "/create" },
    { name: "Profile", icon: <PersonIcon />, path: "/profile" },
    { name: "Setting", icon: <SettingsSharpIcon />, path: "/setting" },
    { name: "Log Out", icon: <LogoutSharpIcon />, path: "/logout" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          display: { xs: drw, sm: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={drwHide}
        anchor="left"
        open={true}
        onClose={() => {
          hideDrawe();
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "light" ? "dark" : "light"
              );
              setMode(theme.palette.mode === "light" ? "dark" : "light");
            }}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon sx={{ color: "orange" }} />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Toolbar>
        <Divider />

        {myList.map((item) => {
          return (
            <Link className="navBtn" to={item.path}>
              <ListItem
                sx={{
                  backgroundColor:
                    currentLocation.pathname === item.path
                      ? theme.palette.bg.main
                      : null,
                  borderRadius: "10px",
                }}
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </Drawer>
    </Box>
  );
}
