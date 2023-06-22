import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  TextField,
  Typography,
  Container,
  Box,
  Button,
  Link,
  Grid,
} from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <Container
      sx={{
        border: "1px solid #ccc",
        borderRadius: 2,
        backgroundColor: "#fff",
        mt: "25vh",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
      maxWidth="xs"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" sx={{ m: 1 }} onSubmit="">
          <TextField
            margin="normal"
            name="email"
            id="email"
            autoFocus
            fullWidth
            label="Email Address"
            required
          ></TextField>
          <TextField
            name="password"
            id="password"
            margin="normal"
            fullWidth
            label="Password"
            required
          ></TextField>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container sx={{ mt: 1 }}>
            <Grid item xs>
              <Link variant="body2">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link variant="body2">Dont't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
