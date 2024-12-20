const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const express = require("express");
const transactionController = require("./controllers/transactionController");

var serviceAccount = require("./spendy-41ea7-firebase-adminsdk-bb0yz-95988c3e61.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express();

app.use(bodyParser.json());

app.post("/api/transaction", transactionController.addTransaction);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
