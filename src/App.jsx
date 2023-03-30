import React, {useState} from "react";
import User from "./components/User";
import Withdraw from "./components/Withdraw";
import Deposit from "./components/Deposit";
import CurrencyExchange from "./components/CurrencyExchange";

function App() {
    const [users, setUsers] = useState({
        User1: {
            name: "Alice",
            balance: 100,
        },
        User2: {
            name: "Bob",
            balance: 200,
        },
        User3: {
            name: "Charlie",
            balance: 300,
        },
    });

    const handleWithdraw = (userId, amount) => {
        setUsers((prevUsers) => {
            const userToUpdate = prevUsers[userId];
            const newBalance = userToUpdate.balance - amount;
            const updatedUser = {...userToUpdate, balance: newBalance};
            return {...prevUsers, [userId]: updatedUser};
        });
    };
    const handleDeposit = (userId, amount) => {
        setUsers((prevUsers) => {
            const userToUpdate = prevUsers[userId];
            const newBalance = userToUpdate.balance + amount;
            const updatedUser = {...userToUpdate, balance: newBalance};
            return {...prevUsers, [userId]: updatedUser};
        });
    }

    return (
        <div>
            <User user={users.User1}/>
            <User user={users.User2}/>
            <User user={users.User3}/>

            <h3>Deposit and Withdraw buttons for each user:</h3>
            <Deposit userId="User1" handleDeposit={handleDeposit}userName={users.User1.name}/>
            <Withdraw userId="User1" handleWithdraw={handleWithdraw} userName={users.User1.name}/>
            <br/>

            <Deposit userId="User2" handleDeposit={handleDeposit}userName={users.User2.name}/>
            <Withdraw userId="User2" handleWithdraw={handleWithdraw} userName={users.User2.name}/>
            <br/>

            <Deposit userId="User3" handleDeposit={handleDeposit}userName={users.User3.name}/>
            <Withdraw userId="User3" handleWithdraw={handleWithdraw} userName={users.User3.name}/>



            <CurrencyExchange/>

        </div>
    );
}

export default App;