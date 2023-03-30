import React from "react";

import { useState } from "react";

import CurrencyExchange from "./CurrencyExchange.jsx";


function App() {
    
    const [users, setUsers] = useState([
        { name: 'User1', balance: 500 },
        { name: 'User2', balance: 1000 },
        { name: 'User3', balance: 250 }
    ]);
    return (
     <div>
    
      <h1>Budget App</h1>
      
      <CurrencyExchange/>
    </div>
  );
}

export default App;