import React from "react";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Balance from "./components/Balance";
import Transfer from "./components/Transfer";
import { useState } from "react";
import UserList from "./components/UserList.jsx";
import LoginForm from "./components/LoginForm.jsx";
import CurrencyExchange from "./CurrencyExchange.jsx";


function App() {
    const [transactions, setTransactions] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState(null);

    const [users, setUsers] = useState([
        { name: 'User1', budget: 500 },
        { name: 'User2', budget: 1000 },
        { name: 'User3', budget: 250 }
    ]);

    return (
    <div>
        {loggedInUser ? (
            <>
                <h1>Budget App</h1>
                <UserList users={users} handleDeposit={handleDeposit} handleWithdrawal={handleWithdrawal} />
            </>
        ) : (
            <LoginForm users={users} setLoggedInUser={setLoggedInUser} />
        )}

      <h1>Budget App</h1>
      <Deposit />
      <Withdraw />
      <Balance />
      <Transfer />
      <CurrencyExchange/>
    </div>
  );
}

export default App;