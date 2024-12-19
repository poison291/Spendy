const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const express = require('express');


var serviceAccount = require('./spendy-41ea7-firebase-adminsdk-bb0yz-95988c3e61.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();


const app = express();


app.use(bodyParser.json());

app.post('/api/transaction', async (req, res) => {
  const { userId, title, amount, description, date, category, type, payment } = req.body;

  console.log("Received transaction data:", req.body); 

  try {
    
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


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
