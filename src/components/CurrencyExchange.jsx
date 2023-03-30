import React, { useState, useEffect } from 'react';
import axios from 'axios';


function CurrencyExchange() {
    const API_ID = import.meta.env.VITE_CE_API_ID;
    const [currencyRates, setCurrencyRates] = useState({});
    const [fromCurrency, setFromCurrency] = useState('DKK');
    const [toCurrency, setToCurrency] = useState('SEK');
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);

    useEffect(() => {
        const fetchCurrencyRates = async () => {
            const response = await axios.get(`https://openexchangerates.org/api/latest.json?app_id=${API_ID}`);



            setCurrencyRates(response.data.rates);
        };
        fetchCurrencyRates();
    }, []);

    useEffect(() => {
        if (fromCurrency && toCurrency) {
            setConvertedAmount((amount / currencyRates[fromCurrency]) * currencyRates[toCurrency]);
        }
    }, [fromCurrency, toCurrency, currencyRates, amount]);

    const handleFromCurrencyChange = (event) => {
        setFromCurrency(event.target.value);
    };

    const handleToCurrencyChange = (event) => {
        setToCurrency(event.target.value);
    };


    const handleAmountChange = (event) => {
        const amountValue = event.target.value;
        setAmount(amountValue);
        const converted = (amountValue / currencyRates[fromCurrency]) * currencyRates[toCurrency];
        setConvertedAmount(converted.toFixed(2));
    };

    return (
        <div>
            <h1>Currency Exchange</h1>
            <div>
                <label htmlFor="from-currency">From:</label>
                <select id="from-currency" value={fromCurrency} onChange={handleFromCurrencyChange}>
                    <option value="DKK">DKK</option>
                    <option value="SEK">SEK</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                    <option value="CAD">CAD</option>
                </select>
                <input type="number" value={amount} onChange={handleAmountChange} />
            </div>
            <div>
                <label htmlFor="to-currency">To:</label>
                <select id="to-currency" value={toCurrency} onChange={handleToCurrencyChange}>
                    <option value="DKK">DKK</option>
                    <option value="SEK">SEK</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                    <option value="CAD">CAD</option>
                </select>
            </div>
            <div>
                <p>{`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`}</p>
            </div>
        </div>
    );
}

export default CurrencyExchange;