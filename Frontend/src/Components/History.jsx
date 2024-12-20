import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react'; // Import Clerk's useUser hook

export default function History() {
  const { user } = useUser(); // Get the current user from Clerk
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      // Make sure to use the correct URL with the userId in the URL parameter
      axios.get(`https://spendy-mt2k.onrender.com/api/transaction/${user.id}`)
        .then((response) => {
          console.log('Transactions fetched:', response.data); // Debugging
          setTransactions(response.data); // Set the fetched transactions
          setLoading(false); // Stop loading
        })
        .catch((err) => {
          console.error('Error fetching transactions:', err);
          setError('Failed to fetch transactions');
          setLoading(false); // Stop loading
        });
    }
  }, [user]);

  if (loading) {
    return <div>Loading transactions...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1 className='h-1/6'>Your Transaction History</h1>
      <ul>
        {transactions.length === 0 ? (
          <li>No transactions found.</li>
        ) : (
          transactions.map((transaction) => (
            <li key={transaction.id}>
              <h3>{transaction.title}</h3>
              <p>Amount: {transaction.amount}</p>
              <p>Description: {transaction.description}</p>
              <p>Category: {transaction.category}</p>
              <p>Type: {transaction.type}</p>
              <p>Date: {transaction.date}</p>
              <p>Payment: {transaction.payment}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
