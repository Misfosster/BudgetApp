import React, { useState } from "react";

function Withdraw(props) {
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const { userId, handleWithdraw } = props;
    handleWithdraw(userId, amount);
    setAmount("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Withdraw:
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
          />
        </label>
        <button type="submit">Withdraw</button>
      </form>
    </div>
  );
}

export default Withdraw;
