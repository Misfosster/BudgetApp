import React, { useState } from "react";

function Deposit(props) {
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const { userId, handleDeposit } = props;
    handleDeposit(userId, amount);
    setAmount("");
  };

  const { userName } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Deposit to {userName}:
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
          />
        </label>
        <button type="submit">Deposit</button>
      </form>
    </div>
  );
}

export default Deposit;

