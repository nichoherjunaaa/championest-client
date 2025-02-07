import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import NavList from './NavList'
import { BsCart3 } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import { useSelector, useDispatch } from 'react-redux'
import API from '../api'
import FormInput from './FormInput'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {

    return (
        <nav className="bg-base-200">
            <div className="navbar mx-auto max-w-8xl px-5 flex justify-between">
                <div className="start-logo w-56 flex items-center justify-center">
                    <img src="/logo.png" alt="logo" className="w-full h-full object-contain" />
                </div>

                <div className="navbar-start pr-28">
                    {/* <div className="hidden lg:flex text-md items-center">
                        <img src={Logo} alt="Logo" className="h-12 w-12" />
                    </div> */}
                    <div className="dropdown relative">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaBarsStaggered className="h-5 w-5" />
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content absolute mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 left-0"
                        >
                            <NavList />
                        </ul>
                    </div>

                    {/* Dekstop */}

                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal">
                            <NavList />
                        </ul>
                    </div>
                </div>
                <div className="w-3/4 ml-8 mb-3">
                    <FormInput className="ml-4" icon={<FaSearch />} label="Cari apa saja" type="text" name="search" placeholder="Search" />
                </div>
                <div className="navbar-end flex md:gap-4">
                    <NavLink to='/cart' className="btn btn-ghost btn-circle btn-md">
                        <div className="indicator">
                            <BsCart3 className="text-xl" />
                            <span className="badge badge-primary badge-xs indicator-item">9</span>
                        </div>
                    </NavLink>
                    <NavLink className="btn btn-outline btn-primary px-6 text-primary btn-md" to='/login'>Login</NavLink>
                    <NavLink className="btn btn-primary px-6 text-base-300" to='/login'>Daftar</NavLink>
                    {/* <button className="btn btn-error lg:btn-md btn-md text-xs lg:text-md">Logout</button> */}
                </div>
            </div>
        </nav >
    )
}

export default Navbar
