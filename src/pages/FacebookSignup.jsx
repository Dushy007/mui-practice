import {
  Container,
  Divider,
  TextField,
  Typography,
  Box,
  Radio,
  Button,
  Paper,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

const FacebookSignup = () => {
  const [selected, setSelected] = React.useState(false);

  const handleRadioChange = (event) => {
    setSelected(event.target.checked);
  };
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src="public/facebook.svg" width="240px"></img>
        <Paper elevation={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 2,
            }}
          >
            <Typography component="h1" variant="h5">
              Create a new account
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              It's quick and easy.
            </Typography>
            <Divider flexItem />
            <Box
              sx={{
                p: 2,
              }}
            >
              {/*This is the form*/}
              <Grid container spacing={1.5}>
                <Grid item xs={6}>
                  <TextField fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption">Date of birth</Typography>
                </Grid>
                <Grid item xs={4} mt={-1.5}>
                  <TextField select fullWidth />
                </Grid>
                <Grid item xs={4} mt={-1.5}>
                  <TextField select fullWidth />
                </Grid>
                <Grid item xs={4} mt={-1.5}>
                  <TextField fullWidth select />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption">Gender</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      border: "1px solid #ccc",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    fullWidth
                  >
                    <Typography color="black">Female</Typography>
                    <Radio
                      checked={selected}
                      onChange={handleRadioChange}
                      color="primary"
                    />
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      border: "1px solid #ccc",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    fullWidth
                  >
                    <Typography color="black">Male</Typography>
                    <Radio
                      checked={selected}
                      onChange={handleRadioChange}
                      color="primary"
                    />
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2">
                    People who use our service may have uploaded your contact
                    information to Facebook. Learn more.
                  </Typography>
                </Grid>
                <Grid item xs={12} al>
                  <Typography variant="subtitle2">
                    By clicking Sign Up, you agree to our Terms, Privacy Policy
                    and Cookies Policy. You may receive SMS notifications from
                    us and can opt out at any time.
                  </Typography>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Button variant="contained" sx={{ width: "12rem", mb: 2 }}>
                  Sign Up
                </Button>
                <Link
                  href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjg3NDAwNDUyLCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D"
                  underline="hover"
                  variant="body1"
                >
                  Already have an account?
                </Link>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default FacebookSignup;
