"use client";

import { Dispatch, createContext, useContext } from "react";

// what are all possible actions that a user can take on the vending machine?
// crud:
// 1. add item to vending machine
// 2. remove item from vending machine
// 3. change item price and/or quantity
// vending:
// 1. insert coins
// 2. buy item
// 3. reset buying after inserting coins
