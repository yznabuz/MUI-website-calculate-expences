import { Box, Paper, Typography, IconButton } from "@mui/material";
import "./Home.css";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/mydata")
      .then((res) => res.json())
      .then((data) => setMydata(data));
  }, []);

  return (
    <Box sx={{ mt: "100px", mr: { xs: "240px", sm: "0px" } }}>
      {mydata.map((item) => {
        return (
          <Paper
            sx={{
              position: "relative",
              width: "366px",
              display: "flex",
              justifyContent: "space-between",
              mt: "22px",
              pt: "27px",
              pb: "7px",
            }}
          >
            <Typography sx={{ ml: "16px" }} variant="h6">
              {item.title}
            </Typography>
            <Typography sx={{ mr: "33px", opacity: "0.8" }} variant="h6">
              ${item.price}
            </Typography>
            <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
              <CloseIcon sx={{ fontSize: "16px" }} />
            </IconButton>
          </Paper>
        );
      })}
      <Typography variant="body1" color="initial">
        Your total price ={" "}
      </Typography>
    </Box>
  );
};

export default Home;
