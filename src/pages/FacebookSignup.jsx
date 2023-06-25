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
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  firstName: z
    .string()
    .nonempty({
      message: "First name cannot be blank",
    })
    .min(8, { message: "Minimum 8 characters required" })
    .refine((value) => {
      return value?.[0] === value[0]?.toUpperCase();
    }, "Should start with uppercase")
    .refine((value) => {
      return /[a-z]/.test(value);
    }, "Should have lowercase letters")
    .refine((value) => {
      return /[^a-zA-Z0-9s]/g.test(value);
    }, "SHould contain atleast 1 special character"),
});
const FacebookSignup = () => {
  const { handleSubmit, control } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
    },
  });

  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const years = [
    1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916,
    1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928,
    1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940,
    1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952,
    1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964,
    1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976,
    1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988,
    1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
    2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
    2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
  ];

  const [selectedValue, setSelectedValue] = React.useState("female");

  const handleRadioChange = (event) => {
    if (event.target.nodeName === "BUTTON") {
      setSelectedValue(
        event.target.querySelector("input").getAttribute("value")
      );
    } else {
      setSelectedValue(event.target.value);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
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
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              {/*This is the form*/}
              <Grid container spacing={1.5}>
                <Grid item xs={6}>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({
                      field: { value, onChange, onBlur, ref },
                      fieldState: { error },
                    }) => {
                      console.log("error", error);
                      return (
                        <FormControl>
                          <TextField
                            name="firstName"
                            fullWidth
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            inputRef={ref}
                            error={Boolean(error)}
                            size="small"
                            placeholder="First name"
                          />
                          <FormHelperText sx={{ color: "error.main" }}>
                            {error?.message ?? ""}
                          </FormHelperText>
                        </FormControl>
                      );
                    }}
                  ></Controller>
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth size="small" placeholder="Surname" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Mobile number or email address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="New password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption">Date of birth</Typography>
                </Grid>
                <Grid item xs={4} mt={-1.5}>
                  <TextField
                    select
                    fullWidth
                    size="small"
                    defaultValue={days[0]}
                  >
                    {days.map((day) => (
                      <MenuItem key={day} value={1}>
                        {day}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={4} mt={-1.5}>
                  <TextField select fullWidth size="small" defaultValue="Jun">
                    {months.map((month) => (
                      <MenuItem key={month} value={month}>
                        {month}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={4} mt={-1.5}>
                  <TextField fullWidth select size="small" defaultValue={2023}>
                    {years.map((year) => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption">Gender</Typography>
                </Grid>
                <Grid item xs={6} mt={-1.5}>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      border: "1px solid #ccc",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    onClick={handleRadioChange}
                    fullWidth
                    size="small"
                  >
                    <Typography color="black">Female</Typography>
                    <Radio
                      checked={selectedValue === "female"}
                      onChange={handleRadioChange}
                      color="primary"
                      size="small"
                      value="female"
                    />
                  </Button>
                </Grid>
                <Grid item xs={6} mt={-1.5}>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleRadioChange}
                    sx={{
                      border: "1px solid #ccc",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    fullWidth
                    size="small"
                  >
                    <Typography color="black">Male</Typography>
                    <Radio
                      checked={selectedValue === "male"}
                      onChange={handleRadioChange}
                      color="primary"
                      size="small"
                      value="male"
                    />
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" sx={{ fontSize: "11px" }}>
                    People who use our service may have uploaded your contact
                    information to Facebook. Learn more.
                  </Typography>
                </Grid>
                <Grid item xs={12} al>
                  <Typography variant="subtitle2" sx={{ fontSize: "11px" }}>
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
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  sx={{ width: "12rem", mb: 2 }}
                >
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
