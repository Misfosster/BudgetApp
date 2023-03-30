import React, {useState} from 'react';
import User from "./User.jsx";

const UserList = ({users, handleDeposit, handleWithdrawal}) => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    return (
        <div>
            {users.map((user) => (
                <User key={user.name}
                      name={user.name}
                      budget={user.budget}
                      handleDeposit={handleDeposit}
                      handleWithdrawal={handleWithdrawal}/>
            ))}
        </div>
    );
};

export default UserList;
