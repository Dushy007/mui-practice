import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import ProTip from "./ProTip";
import Copyright from "./Copyright";
import Button from "./components/CustomButton";
import Login from "./pages/Login";
import FacebookLogin from "./pages/FacebookLogin";
import FacebookSignup from "./pages/FacebookSignup";

function App() {
  return (
    <>
      {/* <Container maxWidth="sm">
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Material UI example
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container> */}
      {/* <Button /> */}
      {/* <Login /> */}
      {/* <FacebookLogin /> */}
      <FacebookSignup />
    </>
  );
}

export default App;
