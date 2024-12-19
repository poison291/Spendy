const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const express = require('express');

// Initialize Firebase Admin SDK
var serviceAccount = require('./spendy-41ea7-firebase-adminsdk-bb0yz-95988c3e61.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Initialize Express App
const app = express();

// Middleware for parsing JSON body
app.use(bodyParser.json());

// Create a new transaction (form data)
app.post('/api/transaction', async (req, res) => {
  const { userId, title, amount, description, date, category, type, payment } = req.body;

  console.log("Received transaction data:", req.body); // Log incoming data

  try {
    // Create a new transaction document in the Firestore "transactions" collection
    const transactionRef = db.collection('transactions').doc();
    await transactionRef.set({
      userId,
      title,
      amount,
      description,
      date,
      category,
      type,
      payment,
    });

    console.log("Transaction added to Firestore");

    res.status(201).json({ message: 'Transaction added successfully' });
  } catch (err) {
    console.error('Error adding transaction: ', err);
    res.status(500).json({ message: 'Error creating transaction', error: err.message });
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
