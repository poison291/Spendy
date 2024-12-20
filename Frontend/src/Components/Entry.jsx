import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Entry() {
  const { user } = useUser();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [payment, setPayment] = useState("");

  const incomeCategory = ["Salary", "Wages", "Interest", "Freelance", "Investments", "Others"];
  const expenseCategories = ["Rent", "Groceries", "Utilities", "Health", "Education", "Travel Expenses", "Others"];

  const handleSubmit =async () => {
    
    if (!title || !amount || !desc || !date || !category || !type || !payment) {
      alert("Please fill in all fields.");
      return; 
    }
  
    // Create the transaction object
    const transaction = {
      title,
      amount,
      description: desc,
      date,
      category,
      type,
      payment,
      userId: user.id,
    };
    
    console.log("Transaction Submitted:", transaction);
  
    try {
      const response = await fetch('http://localhost:3001/api/transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Transaction Added Succesfuly!");
      } else {
        alert('Error adding transaction: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      
    }
  };

  return (
        <>
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="flex flex-col items-center p-6 space-y-4 bg-gray-50 border border-gray-300 rounded-lg max-w-md w-full">
        <h1 className="font-bold text-xl font-mono text-gray-800">Add Transaction</h1>

        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Description"
          value={desc}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setDesc(e.target.value)}
        />

        <div className="flex items-center space-x-2 w-full">
          <input
            type="date"
            className="flex-grow px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setDate(new Date().toISOString().split("T")[0])}
            className="px-3 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Today
          </button>
        </div>

        <div className="w-full">
          <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-700">
            Transaction Type
          </label>
          <select
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select Transaction Type
            </option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        <div className="w-full">
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700">
            Select Category
          </label>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!type}
          >
            <option value="" disabled>
              {type ? "Select Category" : "Select Transaction Type First"}
            </option>
            {type === "Income" &&
              incomeCategory.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            {type === "Expense" &&
              expenseCategories.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </div>

        <div className="w-full">
          <label htmlFor="payment" className="block mb-2 text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <select
            name="payment"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select Payment Method
            </option>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
            <option value="bank">Bank</option>
          </select>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Add Transaction
        </button>
      </div>
    </div>
    <ToastContainer/>
    </>
  );
}
