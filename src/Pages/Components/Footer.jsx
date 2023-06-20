import { Box, Container, Grid, Typography } from "@mui/material";

export default function Footer() {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          position: "absolute",
          bottom: "0",
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary" variant="subtitle1">
                {`${new Date().getFullYear()} | React | Material UI | YZN `}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
