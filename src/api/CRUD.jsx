export function fetchTransfers() {
    return fetch('/api/transfers').then(response => response.json());
  }
  
  export function createTransfer(transfer) {
    return fetch('/api/transfers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transfer)
    }).then(response => response.json());
  }
  
  export function updateTransfer(id, transfer) {
    return fetch(`/api/transfers/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transfer)
    }).then(response => response.json());
  }
  
  export function deleteTransfer(id) {
    return fetch(`/api/transfers/${id}`, {
      method: 'DELETE'
    }).then(response => response.json());
  }