import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from '../Components/Landing';
import Hero from '../Components/Hero';
import Dashboard from '../Components/Dashboard';
import History from '../Components/History';
import Entry from '../Components/Entry';
import Box from '../Components/Box';


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
                    path: 'history',
                    element: <History />,
                },
                {
                    path: 'dashboard',
                    element: <Dashboard />,
                },
                {
                    path: 'entry',
                    element: <Entry />
                },
                {
                    path: 'test',
                    element: <Box/>
                }



            ],
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}
