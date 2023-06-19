import { Box, Paper, Typography, IconButton } from "@mui/material";
import "./Home.css";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

const Home = () => {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/mydata")
      .then((res) => res.json())
      .then((data) => setMydata(data));
  }, []);
  const result = mydata.reduce(
    (total, currentValue) => (total = total + currentValue.price),
    0
  );

  return (
    <Box sx={{ mt: "100px", mr: { xs: "240px", sm: "0px" } }}>
      {mydata.map((item) => {
        return (
          <Paper
            key={item.id}
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
            <IconButton
              onClick={() => {
                fetch(`http://localhost:3001/mydata/${item.id}`, {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                });
              }}
              href="/"
              sx={{ position: "absolute", top: "0", right: "0" }}
            >
              <CloseIcon sx={{ fontSize: "16px" }} />
            </IconButton>
          </Paper>
        );
      })}
      <Typography
        sx={{
          mt: "30px",
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "18px",
        }}
        variant="body1"
      >
        Your total price 👉 ${result}
      </Typography>
    </Box>
  );
};

export default Home;
