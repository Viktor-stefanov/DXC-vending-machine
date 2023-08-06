import {
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@mui/material";
import { BaseSyntheticEvent } from "react";

export default function VendingMachineInsertor({
  insertCoins,
  classes,
  setInsertedMoney,
}: {
  insertCoins: (e: BaseSyntheticEvent) => void;
  classes: any;
  setInsertedMoney: (amount: number) => void;
}) {
  return (
    <Card variant="outlined">
      <CardContent>
        <form onSubmit={insertCoins}>
          <Typography variant="h5">
            Insert money into vending machine:
          </Typography>
          <br />
          <FormControl fullWidth>
            <InputLabel htmlFor="amount">Amount</InputLabel>
            <Input
              id="amount"
              type="number"
              name="amount"
              required
              inputProps={{ step: "0.01" }}
            />
          </FormControl>
          <br />
          <br />
          <Button className={classes.button} type="submit" variant="contained">
            Insert Money (coins & cash)
          </Button>
          <br />
        </form>
        <br />
        <Button
          className={classes.button}
          onClick={() => setInsertedMoney(0)}
          variant="contained"
        >
          Terminate session
        </Button>
      </CardContent>
    </Card>
  );
}
