"use client";

import React from "react";
import { AppBar, Theme, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor: "#1976d2",
    height: "6rem",
  },
  title: {
    flexGrow: 1,
    padding: "2rem 0 0 0",
    textAlign: "center",
  },
}));

export default function Header({ children }: { children: React.ReactNode }) {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            DXC Vending Machine
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
}
