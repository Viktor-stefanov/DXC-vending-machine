import {
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
  Button,
  DialogTitle,
  DialogContent,
  Dialog,
} from "@mui/material";
import { BaseSyntheticEvent, useState } from "react";

export default function VendingMachineItems({
  items,
  buyItem,
  removeItem,
  updateItem,
  classes,
}: {
  items: { [key: string]: { quantity: number; price: number } };
  buyItem: (item: string) => void;
  removeItem: (item: string) => void;
  updateItem: (e: BaseSyntheticEvent) => void;
  classes: any;
}) {
  const [changeItem, setChangeItem] = useState("");

  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent>
        <Typography variant="h4" align="center">
          DXC Vending Machine Items
        </Typography>
        <ul>
          {Object.keys(items).map((item) => (
            <li key={item}>
              {items[item].quantity} x {item}. Price for one: $
              {items[item].price}
              <CardActions>
                <Button
                  className={classes.button}
                  variant="outlined"
                  onClick={() => buyItem(item)}
                >
                  Buy
                </Button>
                <Button
                  className={classes.button}
                  variant="outlined"
                  onClick={() => removeItem(item)}
                >
                  Remove item from vending machine
                </Button>
                <Button
                  className={classes.button}
                  variant="outlined"
                  onClick={() => setChangeItem(changeItem === item ? "" : item)}
                >
                  Change item's quantity and/or price
                </Button>
              </CardActions>
              {changeItem === item && (
                <Dialog open={true} onClose={() => setChangeItem("")}>
                  <DialogTitle>Change Item</DialogTitle>
                  <DialogContent>
                    <form onSubmit={(e) => updateItem(e)}>
                      <TextField
                        label="New item quantity"
                        type="number"
                        name="quantity"
                        fullWidth
                        required
                      />
                      <TextField
                        label="New item price"
                        type="number"
                        inputProps={{ step: "0.01" }}
                        name="price"
                        fullWidth
                        required
                      />
                      <Button
                        className={classes.button}
                        type="submit"
                        variant="contained"
                      >
                        Change item
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
