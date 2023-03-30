import React, { useState, useRef } from "react";

function Withdraw(props) {
  const [amount, setAmount] = useState("");
  const withdrawRef = useRef([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { userId, handleWithdraw } = props;
    handleWithdraw(userId, amount);
    withdrawRef.current.push(amount); // add the withdrawal amount to the ref
    console.log(withdrawRef.current); // log the array of withdrawal amounts
    setAmount("");
  };

  const { userName } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Withdraw from {userName}:
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
