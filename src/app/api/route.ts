import { NextResponse } from "next/server";

const vendingItems = {
  "Coca-Cola": { quantity: 10, price: 1.5 },
  Pepsi: { quantity: 15, price: 1.4 },
  Fanta: { quantity: 15, price: 1.45 },
  Sprite: { quantity: 15, price: 1.55 },
  Snickers: { quantity: 15, price: 1.75 },
  "Lays Chips": { quantity: 15, price: 2 },
  "Lays Nuts": { quantity: 15, price: 2.5 },
  "Ruffles Chips": { quantity: 15, price: 2.25 },
  Water: { quantity: 15, price: 1 },
  "Coke Zero": { quantity: 15, price: 1.6 },
};

export async function GET() {
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(1000);

  return NextResponse.json(vendingItems);
}
