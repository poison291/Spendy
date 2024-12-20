const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
var serviceAccount = require("./spendycredit.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = admin.firestore();

app.post("/api/transaction", async (req, res) => {
  const { userId, title, amount, description, date, category, type, payment } =
    req.body;

  if (
    !userId ||
    !title ||
    !amount ||
    !description ||
    !date ||
    !category ||
    !type ||
    !payment
  ) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const transactionRef = db.collection("transactions");

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

    res.status(201).json({ message: "Transaction added successfully" });
  } catch (error) {
    console.error("Error adding transaction:", error);
    res.status(500).json({
      message: "Failed to submit transaction. Please try again.",
      error: error.message,
    });
  }
});

app.get("/api/transaction/:userId", async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const transactionRef = db.collection("transactions");

    const snapshot = await transactionRef.where("userId", "==", userId).get();

    if (snapshot.empty) {
      return res
        .status(404)
        .json({ message: "No transactions found for this user" });
    }

    const transactions = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({
      message: "Failed to fetch transactions",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

module.exports = db;
