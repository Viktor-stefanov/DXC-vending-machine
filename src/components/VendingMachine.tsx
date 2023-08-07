"use client";

import { GET } from "../app/api/route";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { NextResponse } from "next/server";
import { Container, Snackbar, Typography, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import VendingMachineItems from "./VendingMachineItems";
import VendingMachineInsertor from "./VendingMachineInsertor";
import VendingMachineItemInsertor from "./VendingMachineItemInsertor";

const coinDenominations = [0.01, 0.05, 0.1, 0.25, 0.5, 1],
  cashDenominations = [1, 2, 5, 10, 20, 50, 100];

type Item = {
  quantity: number;
  price: number;
};

type Items = {
  [item: string]: Item;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "auto",
  },
  card: {
    padding: "1rem",
    marginBottom: "1rem",
  },
  button: {
    margin: "0.5rem",
  },
  dialog: {
    "& .MuiDialog-paper": {
      padding: "1rem",
    },
  },
  form: {
    "& .MuiFormControl-root": {
      marginBottom: "1rem",
    },
  },
}));

export default function VendingMachine() {
  const [insertedMoney, setInsertedMoney] = useState(0);
  const [changeItem, setChangeItem] = useState("");
  const [insertItem, setInsertItem] = useState(false);
  const [msg, setMsg] = useState("");
  const [items, setItems]: [
    items: Items,
    setItems: Dispatch<SetStateAction<{}>>
  ] = useState({});
  const classes = useStyles();

  useEffect(() => {
    GET().then(async (response: NextResponse) => {
      if (response.status === 200) {
        const items = await response.json();
        setItems(items);
      }
    });
  }, []);

  function setMessage(message: string) {
    setMsg(message);
    setTimeout(() => setMessage(""), 3000);
  }

  function onInsertItemClick() {
    setInsertItem(!insertItem);
  }

  function buyItem(item: string) {
    if (items[item].quantity === 0)
      return setMessage(`${item} is out of stock.`);
    if (insertedMoney < items[item].price)
      return setMessage(
        `Insert ${items[item].price - insertedMoney}$ more to buy this item.`
      );

    setMessage(
      `${item} sucessfully bought and your change is ${
        insertedMoney - items[item].price
      }$`
    );
    setInsertedMoney(insertedMoney - items[item].price);
    setItems({
      ...items,
      [item]: { ...items[item], quantity: items[item].quantity - 1 },
    });

    if (items[item].quantity - 1 === 0) {
      delete items[item];
      setItems({ ...items });
    }
  }

  function removeItem(item: string) {
    delete items[item];
    setItems({ ...items });
  }

  function addItem(e: BaseSyntheticEvent) {
    e.preventDefault();
    const formData = new FormData(e.target),
      itemName = formData.get("itemName") as string,
      itemQuantity = parseInt(formData.get("itemQuantity") as string) as number,
      itemPrice = parseFloat(formData.get("itemPrice") as string) as number;

    if (Object.keys(items).includes(itemName))
      return setMessage(
        `${itemName} is already served by this vending machine.`
      );
    else if (itemQuantity <= 0)
      return setMessage("Please enter a valid quantity");
    else if (Object.keys(items).some((i) => items[i].price === itemPrice))
      return setMessage(`There is already an item with the price ${itemPrice}`);

    setItems({
      ...items,
      [itemName]: { quantity: itemQuantity, price: itemPrice },
    });
    setInsertItem(false);
  }

  function updateItem(e: BaseSyntheticEvent) {
    e.preventDefault();
    const formData = new FormData(e.target),
      itemQuantity = parseInt(formData.get("quantity") as string) as number,
      itemPrice = parseFloat(formData.get("price") as string) as number;

    if (itemQuantity <= 0) return setMessage("Please enter a valid quantity");
    else if (itemPrice <= 0) return setMessage("Please enter a valid price");

    setItems({
      ...items,
      [changeItem]: { quantity: itemQuantity, price: itemPrice },
    });
    setChangeItem("");
  }

  function insertCoins(e: BaseSyntheticEvent) {
    e.preventDefault();
    const formData = new FormData(e.target),
      amount = parseFloat(formData.get("amount") as string) as number;

    if (amount < 1 && !coinDenominations.includes(amount))
      return setMessage("Invalid coin type.");
    else if (amount >= 1 && amount < 100 && !cashDenominations.includes(amount))
      return setMessage("Invalid cash type.");
    else if (amount > 100) return setMessage("Please enter a valid amount");

    setInsertedMoney(insertedMoney + amount);
  }

  return (
    <Container maxWidth="md" className={classes.root}>
      <Snackbar
        open={msg !== ""}
        autoHideDuration={4000}
        onClose={() => setMsg("")}
        message={msg}
      />

      <VendingMachineItems
        items={items}
        buyItem={buyItem}
        removeItem={removeItem}
        updateItem={updateItem}
        classes={classes}
      />

      <VendingMachineInsertor
        classes={classes}
        insertCoins={insertCoins}
        setInsertedMoney={setInsertedMoney}
      />

      {insertedMoney > 0 && (
        <Typography variant="h6">
          Currently inserted money is ${insertedMoney}
        </Typography>
      )}

      <VendingMachineItemInsertor
        classes={classes}
        addItem={addItem}
        insertItem={insertItem}
        onInsertItemClick={onInsertItemClick}
      />
    </Container>
  );
}
