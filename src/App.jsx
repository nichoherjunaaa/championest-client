import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const LombaPage = lazy(() => import('./pages/LombaPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CustomerServicePage = lazy(() => import('./pages/CustomerServicePage'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'lomba',  // atau 'lomba' jika lebih sesuai
                element: <LombaPage />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'customer-service',
                element: <CustomerServicePage />
            },
        ]
    }
]);

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App;
