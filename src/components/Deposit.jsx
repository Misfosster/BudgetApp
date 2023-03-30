import React, { useState, useRef } from "react";

function Deposit(props) {
  const [amount, setAmount] = useState("");
  const depositRef = useRef([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { userId, handleDeposit } = props;
    handleDeposit(userId, amount);
    depositRef.current.push(amount); // add the deposit amount to the ref
    console.log(depositRef.current); // log the array of deposit amounts
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
