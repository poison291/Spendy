import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { UserButton } from '@clerk/clerk-react';

export default function Navbar() {
  const {user} = useUser()
  return (
    <>
       <div className=" top-0 z-10 bg-gray-800 text-white p-4 shadow-md">
        <div className="flex justify-between items-center">
          <ul className="flex space-x-12">
            <li>
              <Link to='/dashboard' className="hover:text-teal-500">Dashboard</Link>
            </li>
            <li>
              <Link to='/entry' className="hover:text-teal-500">New Entry</Link>
            </li>
            <li>
              <Link to='/history' className="hover:text-teal-500">Transaction History</Link>
            </li>
          </ul>
          <div>
            <UserButton className="bg-teal-500 hover:bg-teal-400 px-4 py-2 rounded-full" />
          </div>
        </div>
        <h1 className='mt-5 text-emerald-500 font-bold text-xl hover:text-gray-200'>Welcome {user?.firstName}! Here's Your Finance...</h1>
      </div>
    </>
  );
}
