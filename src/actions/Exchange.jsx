export function exchange(amount, fromCurrency, toCurrency) {
    return fetch(`https://openexchangerates.org/api/convert/${amount}/${fromCurrency}/${toCurrency}?app_id=YOUR_APP_ID`)
      .then(response => response.json())
      .then(data => {
        return {
          amount: data.result,
          currency: toCurrency,
          recipient: '',
          date: new Date().toISOString()
        };
      });
  }