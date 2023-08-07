This is a DXC Technology project that implements the functionality of a real life vending machine into a web application UI.

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
npm i
# or
yarn add
```

Finally, run the development server locally:

```bash
npm run dev
# or
yarn run dev
```

This will spin up a local development server. Now you can open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

This project utilizes TS, React + NextJS and MaterialUI v5 to make the UI visually appealing and responsive. Arithemtic operations are done using bignumber.js library to avoid floating point errors (0.1 + 0.1 + 0.1 !== 0.3).
