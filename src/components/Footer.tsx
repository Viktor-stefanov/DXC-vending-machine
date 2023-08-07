"use client";

import React from "react";
import { AppBar, Toolbar, Typography, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "#1976d2", // Customize the footer background color
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.appBar}>
      <Toolbar>
        <Typography variant="body1" className={classes.title}>
          &copy; {new Date().getFullYear()} DXC Vending Machine. All rights
          reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
