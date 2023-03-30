import React, { useState } from "react";

function Withdraw(props) {
  const [amount, setAmount] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Call function to handle withdrawal
    props.handleWithdraw(parseFloat(amount));
    // Reset amount input field
    setAmount("");
  }

  return (
    <div>
      <h2>Withdraw</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </label>
        <button type="submit">Withdraw</button>
      </form>
    </div>
  );
}

export default Withdraw;
