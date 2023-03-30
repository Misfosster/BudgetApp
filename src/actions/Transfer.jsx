import { createTransfer } from '../api/crud';

export function transfer(amount, currency, recipient) {
  return createTransfer({
    type: 'transfer',
    amount: amount,
    currency: currency,
    recipient: recipient,
    date: new Date().toISOString()
  });
}