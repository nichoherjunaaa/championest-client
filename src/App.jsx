import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Loading from './components/Loading';
// loader
import { loader as homeLoader } from './pages/HomePage';
import { loader as lombaLoader } from './pages/LombaPage';

// action
import { action as LoginAction } from './pages/LoginPage';
import { action as RegisterAction } from './pages/RegisterPage';

// pages
import DetailPage from './pages/DetailPage';
import InformationPage from './pages/InformationPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import LombaPage from './pages/LombaPage';

import { store } from './store';
import TambahPage from './pages/TambahPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
                loader: homeLoader
            },
            {
                path: 'kompetisi',
                element: <LombaPage />,
                loader: lombaLoader
            },
            {
                path: 'kompetisi/new',
                element: <TambahPage/>
            },
            
            {
                path: 'cart',
                element: <CartPage/>
            },
            
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'news',
                element: <InformationPage />
            },
            {
                path: 'kompetisi/detail/:id',
                element: <DetailPage />
            },
            {
                path :  'checkout',
                element : <CheckoutPage/>
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />,
        action: LoginAction(store)
    },
    {
        path: '/register',
        element: <RegisterPage />,
        action: RegisterAction(store)
    }
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
