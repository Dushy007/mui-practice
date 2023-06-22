import { Button, useTheme } from "@mui/material";
import React, { useEffect } from "react";

const CustomButton = () => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      Contained
    </Button>
  );
};

export default CustomButton;
