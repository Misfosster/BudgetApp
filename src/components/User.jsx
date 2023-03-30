import React from 'react';

const User = ({name, budget, handleDeposit, handleWithdrawal}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Budget: ${budget}</p>
            {name === loggedInUser &&
                <TransactionForm handleDeposit={handleDeposit} handleWithdrawal={handleWithdrawal}/>}
        </div>
    );
};

export default User;