import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const CustomAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Weather App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
