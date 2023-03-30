import React from "react";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Balance from "./components/Balance";
import Transfer from "./components/Transfer";
import Exchange from "./components/Exchange";

function App() {
  return (
    <div>
      <h1>Budget App</h1>
      <Deposit />
      <Withdraw />
      <Balance />
      <Transfer />
      {/* <Exchange /> */}
    </div>
  );
}

export default App;