import React from 'react'
import Sidebar from '../components/SideBar'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
const MainLayout = () => {
    return (
        <>
            <Sidebar />
            <main className="mx-auto max-w-6xl px-8 py-20 min-h-[76.5vh]">
                    <Outlet />
                </main>
            <Footer/>
        </>
    )
}

export default MainLayout