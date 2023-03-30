import React, { useState } from "react";

function Exchange(props) {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(props.baseCurrency);

  function handleSubmit(event) {
    event.preventDefault();
    // Call function to handle currency exchange
    props.handleCurrencyExchange(parseFloat(amount), currency);
    // Reset amount input field
    setAmount("");
  }

  return (
    <div>
      <h2>Currency Exchange</h2>
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
          Currency:
          <select value={currency} onChange={(event) => setCurrency(event.target.value)}>
            {props.currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Exchange</button>
      </form>
    </div>
  );
}

export default Exchange;
