This is a DXC Technology project that implements the functionality of a real life vending machine into a web application UI. The project utilizes TS, React + NextJS and MaterialUI v5 to make the UI visually appealing and responsive. Arithemtic operations are done using bignumber.js library to avoid floating point errors (0.1 + 0.1 + 0.1 !== 0.3).

## Project setup

First, clone the project and cd into it:
```
# cd to the directory you want to clone the projct at e.g.
cd ~/Dev/Interview
git clone <url_of_this_repository>
cd ./DXC-vending-machine
```

Second, install the dependencies:

```
npm i --legacy-peer-deps
# or
yarn install --force
```

The --legacy-peer-deps / --force argument is needed because MUI v5 uses some legacy peer dependancies that react v18 considers 'old'. But as it is discussed [here](https://github.com/mui/material-ui/issues/32074) it is adviced to simply ignore this error as it is trivial and everything is working intact.

Finally, run the development server locally:

```bash
npm run dev
# or
yarn run dev
```

This will spin up a local development server. Now you can open [http://localhost:3000](http://localhost:3000) with your browser to see and interact with the application. The UI is pretty straight forward, there is an input field to enter your coins/cash under the items available. You can insert the following coins: 1¢, 5¢, 10¢, 20¢, 50¢, 1$. And the following paper money: 1$, 2$, 5$, 10$, 20$, 50$, 100$. If you try to insert a different amount a popup error message will be shown. After inserting your amount you can either buy your desired item(s) or terminate the session which will return your money. There are CRUD opratiosn implemented, meaning that you can add/remove/update/see items in the vending machine. To add an item the there is a button 'Add new item' just above the footer which will make input fields for the new item visible. An update and remove buttons are placed right next to where the items are displayed in a list-like view.   
