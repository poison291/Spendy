import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from '../Components/Landing';
import Hero from '../Components/Hero';
import Income from '../Components/Income';
import Expenses from '../Components/Expenses';
import Dashboard from '../Components/Dashboard';
import About from '../Components/About';

export default function Routing() {
    const router = createBrowserRouter([
        {
            path: '/auth',
            element: <Landing />,
        },
        {
            path: '/',
            element: <Hero />,
            children: [
                {
                    path: 'income',
                    element: <Income />,
                },
                {
                    path: 'expenses',
                    element: <Expenses />,
                },
                {
                    path: 'about',
                    element: <About />,
                },
                {
                    path: 'dashboard',
                    element: <Dashboard />,
                },



            ],
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}
