import "./Home.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, m: "32px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>xs=12</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Item>xs=4</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
