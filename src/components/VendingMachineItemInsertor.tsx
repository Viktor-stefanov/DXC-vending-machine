import { Button, Card, CardContent, TextField } from "@mui/material";
import { BaseSyntheticEvent } from "react";

export default function VendingMachineItemInsertor({
  classes,
  onInsertItemClick,
  insertItem,
  addItem,
}: {
  classes: any;
  onInsertItemClick: () => void;
  insertItem: boolean;
  addItem: (e: BaseSyntheticEvent) => void;
}) {
  return (
    <>
      <Button
        className={classes.button}
        onClick={onInsertItemClick}
        variant="contained"
      >
        Add new item to vending machine
      </Button>

      {insertItem && (
        <Card variant="outlined">
          <CardContent>
            <form onSubmit={addItem}>
              <TextField
                label="Item's name"
                type="text"
                name="itemName"
                fullWidth
                required
              />
              <TextField
                label="Item's quantity"
                type="number"
                name="itemQuantity"
                fullWidth
                required
              />
              <TextField
                label="Item's price"
                type="number"
                inputProps={{ step: "0.01" }}
                name="itemPrice"
                fullWidth
                required
              />
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
              >
                Add item
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
}
