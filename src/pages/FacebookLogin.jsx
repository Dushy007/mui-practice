import { Image } from "@mui/icons-material";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import React from "react";

const FacebookLogin = () => {
  return (
    <Container maxWidth="xs" sx={{ mt: "25vh" }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img src="public/facebook.svg" width="240px"></img>
        <Box
          sx={{
            border: "1px solid #ccc",
            p: 2,
            borderRadius: 2,
            backgroundColor: "#fff",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h6" gutterBottom>
            Log in to Facebook
          </Typography>
          <Box component="form">
            <TextField
              fullWidth
              margin="normal"
              placeholder="Email address or phone number"
              sx={{ mb: 1.5 }}
            />
            <TextField fullWidth placeholder="Password" sx={{ mb: 1.5 }} />
            <Button fullWidth variant="contained">
              <Box sx={{ fontSize: "1.2rem" }}>Log In</Box>
            </Button>
          </Box>
          <Box sx={{ mt: 3, mb: 2 }}>
            <Link variant="body2" underline="hover">
              Forgotten account?
            </Link>
            <span> &#183; </span>
            <Link
              href="https://www.facebook.com/r.php?next=https%3A%2F%2Fwww.facebook.com%2Fads%2Fcreate%2F%3Fnav_source%3Dunknown%26campaign_id%3D402047449186%26placement%3Dpflo%26extra_1%3Dnot-admgr-user&locale=en_GB&display=page"
              variant="body2"
              underline="hover"
            >
              Sign Up for Facebook
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default FacebookLogin;
