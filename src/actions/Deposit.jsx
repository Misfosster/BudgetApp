import { createTransfer } from '../api/crud';

export function deposit(amount, currency) {
  return createTransfer({
    type: 'deposit',
    amount: amount,
    currency: currency,
    recipient: '',
    date: new Date().toISOString()
  });
}