import { useState, useEffect, useRef } from 'react';
import { fetchTransfers, createTransfer, updateTransfer, deleteTransfer } from './api/crud';
import { deposit } from './actions/deposit';
import { withdraw } from './actions/withdrawal';
import { transfer } from './actions/transfer';
import { exchange } from './actions/exchange';

function App() {
  const [transfers, setTransfers] = useState([]);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [recipient, setRecipient] = useState('');
  let [error, setError] = useState(null);
  const amountInput = useRef(null);

  useEffect(() => {
    fetchTransfers().then(data => {
      setTransfers(data);
    });
  }, []);

  function handleDeposit(e) {
    e.preventDefault();
    deposit(amount, currency).then(data => {
      setTransfers([...transfers, data]);
      setAmount('');
      amountInput.current.focus();
    });
  }

  function handleWithdraw(e) {
    e.preventDefault();
    withdraw(amount, currency).then(data => {
      setTransfers([...transfers, data]);
      setAmount('');
      amountInput.current.focus();
    });
  }

  function handleTransfer(e) {
    e.preventDefault();
    transfer(amount, currency, recipient).then(data => {
      setTransfers([...transfers, data]);
      setAmount('');
      setRecipient('');
      amountInput.current.focus();
    });
  }

  function handleExchange(e) {
    e.preventDefault();
    exchange(amount, currency, 'EUR').then(data => {
      createTransfer(data).then(data => {
        setTransfers([...transfers, data]);
        setAmount('');
        amountInput.current.focus();
      });
    });
  }

  function handleDelete(id) {
    deleteTransfer(id).then(() => {
      setTransfers(transfers.filter(transfer => transfer.id !== id));
    });
  }

  return (
    <div className="container">
      <h1>Budget App</h1>
      {error && <div className="alert alert-danger">{error.message}</div>}
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleDeposit}>
            <h2>Deposit</h2>
            <div className="form-group">
              <label>Amount:</label>
              <input type="number" className="form-control" value={amount} onChange={e => setAmount(parseFloat(e.target.value))} />
            </div>
            <div className="form-group">
              <label>Currency:</label>
              <input type="text" className="form-control" value={currency} onChange={e => setCurrency(e.target.value)} />
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleWithdraw}>
            <h2>Withdraw</h2>
            <div className="form-group">
              <label>Amount:</label>
              <input type="number" className="form-control" value={amount} onChange={e => setAmount(parseFloat(e.target.value))} />
            </div>
            <div className="form-group">
              <label>Currency:</label>
              <input type="text" className="form-control" value={currency} onChange={e => setCurrency(e.target.value)} />
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      </div>
  )
}
      
export default App;
