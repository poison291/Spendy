// backend/controllers/transactionController.js

const admin = require('firebase-admin');
const db = admin.firestore();

exports.addTransaction = async (req, res) => {
  const { userId, title, amount, description, date, category, type, payment } = req.body;
  console.log('Received request body:', req.body); // Log the request body

  if (!userId || !title || !amount || !description || !date || !category || !type || !payment) {
    console.log('Validation failed: Missing required fields'); // Log validation failure
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    console.log('Attempting to add transaction to Firestore');
    const transactionRef = db.collection('transactions');
    const newTransaction = {
      userId,
      title,
      amount,
      description,
      date,
      category,
      type,
      payment,
    };

    await transactionRef.add(newTransaction);
    console.log('Transaction added successfully'); // Log success

    res.status(201).json({ message: 'Transaction added successfully' });
  } catch (error) {
    console.error('Error adding transaction:', error); // Log error
    res.status(500).json({ message: 'Failed to submit transaction. Please try again.', error: error.message });
  }
};
