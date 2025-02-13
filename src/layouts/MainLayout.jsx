import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../components/Footer';
import Sidebar from '../components/SideBar';
import Navbar from '../components/Navbar';
import Loading from './../components/Loading';
const MainLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    return (
        <>
            <Navbar />
            {isLoading ? (<Loading key="loading" />) : (
                <main className="mx-auto max-w-7xl px-8 lg:py-20 py-10 min-h-[76.5vh]">

                    <Outlet />
                </main>
            )}
            <Footer />
        </>
    )
}

export default MainLayout