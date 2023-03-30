import React, { useState } from "react";

function Transfer(props) {
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Call function to handle transfer
    props.handleTransfer(parseFloat(amount), account);
    // Reset input fields
    setAmount("");
    setAccount("");
  }

  return (
    <div>
      <h2>Transfer to Different Account</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </label>
        <label>
          Account:
          <input
            type="text"
            value={account}
            onChange={(event) => setAccount(event.target.value)}
          />
        </label>
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
}

export default Transfer;
