"use client";

import React from "react";
import { Container, CircularProgress, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/joy";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  loadingText: {
    marginTop: "1rem",
  },
}));

export default function WaitingPage() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <CircularProgress size={80} />
      <Typography variant="h6" className={classes.loadingText}>
        Please wait...
      </Typography>
    </Container>
  );
}
