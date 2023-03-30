import { createTransfer } from '../api/crud';

export function withdraw(amount, currency) {
  return createTransfer({
    type: 'withdrawal',
    amount: amount,
    currency: currency,
    recipient: '',
    date: new Date().toISOString()
  });
}