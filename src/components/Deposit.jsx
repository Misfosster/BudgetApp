import React, { useState } from "react";

function Deposit(props) {
  const [amount, setAmount] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Call function to handle deposit
    props.handleDeposit(parseFloat(amount));
    // Reset amount input field
    setAmount("");
  }

  return (
    <div>
      <h2>Deposit</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </label>
        <button type="submit">Deposit</button>
      </form>
    </div>
  );
}

export default Deposit;
