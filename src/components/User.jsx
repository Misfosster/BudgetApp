import React from "react";

function User(props) {
  const { name, balance } = props.user;

  return (
    <div>
      <h2>{name}</h2>
      <p>Balance: {balance}</p>
    </div>
  );
}

export default User;
