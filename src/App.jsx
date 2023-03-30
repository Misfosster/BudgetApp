import React, {useState} from "react";
import User from "./components/User";
import Withdraw from "./components/Withdraw";
import Deposit from "./components/Deposit";


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
            <Deposit userId="User1" handleDeposit={handleDeposit}/>
            <Withdraw userId="User1" handleWithdraw={handleWithdraw}/>
            <br/>

            <Deposit userId="User1" handleDeposit={handleDeposit}/>
            <Withdraw userId="User2" handleWithdraw={handleWithdraw}/>
            <br/>

            <Deposit userId="User1" handleDeposit={handleDeposit}/>
            <Withdraw userId="User3" handleWithdraw={handleWithdraw}/>
        </div>
    );
}

export default App;