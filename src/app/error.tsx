"use client";

import React from "react";
import { useEffect } from "react";
import { Button, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/joy";

const useStyles: any = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  errorText: {
    textAlign: "center",
  },
}));

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const classes = useStyles();

  useEffect(() => {
    console.log(error); // in a real application this error should be logged to a log file
  }, [error]);

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h1" className={classes.errorText}>
        An error occured while using the application
      </Typography>
      <Typography variant="h4" className={classes.errorText}>
        {error.message}
      </Typography>
      <Button onClick={reset} variant="contained">
        Try again
      </Button>
    </Container>
  );
}
