import React from "react";

function Balance(props) {
  return (
    <div>
      <h2>Show Balance</h2>
      <p>Your current balance is: {props.balance} {props.currency}</p>
    </div>
  );
}

export default Balance;
