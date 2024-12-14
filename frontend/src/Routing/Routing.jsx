import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from '../Components/Landing';  // Authentication page
import Hero from '../Components/Hero';  // Main website content

export default function Routing() {
    const router = createBrowserRouter([
        {
            path: '/auth',  // Authentication page
            element: <Landing />,
        },
        {
            path: '/',  // Main website
            element: <Hero />,
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}
