import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Loading from './components/Loading';
// loader
import { loader as homeLoader } from './pages/HomePage';
import { loader as lombaLoader } from './pages/LombaPage';
// Lazy load pages
import DetailPage from './pages/DetailPage';
import InformationPage from './pages/CustomerServicePage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
const HomePage = lazy(() => import('./pages/HomePage'));
const LombaPage = lazy(() => import('./pages/LombaPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage/>,
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
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    }
]);

const App = () => {
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App;
