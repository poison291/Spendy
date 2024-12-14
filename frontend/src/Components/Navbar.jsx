import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="bg-gray-700 mx-5 absolute text-white w-64 h-[80vh] my-[10vh] px-6 rounded-xl shadow-md flex flex-col justify-between select-none">

      <ul className="space-y-4">
        <li className="hover:bg-gray-400 px-4 mt-5 py-2 rounded-md cursor-pointer">
          <Link to="/dashboard" className="w-full h-full block py-2 px-4">Dashboard</Link>
        </li>
        <li className="hover:bg-gray-400 px-4 py-2 rounded-md cursor-pointer">
          <Link to="/income" className="w-full h-full block py-2 px-4">Income</Link>
        </li>
        <li className="hover:bg-gray-400 px-4 py-2 rounded-md cursor-pointer">
          <Link to="/expenses" className="w-full h-full block py-2 px-4">Expenses</Link>
        </li>
      </ul>
      <ul className="space-y-4">
        <li className="hover:bg-gray-400 px-4 mb-5 py-2 rounded-md cursor-pointer">
          <Link to="/about" className="w-full h-full block py-2 px-4">About Us</Link>
        </li>
      </ul>
    </div>
  );
}
