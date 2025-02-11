import React from 'react'
import FormInput from '../components/FormInput';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const FormAuth = ({ isRegister = false }) => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <div className="w-full max-w-md bg-base-300 shadow-lg rounded-lg p-6">
                <h2 className="lg:text-3xl text-2xl font-bold text-center mb-4">🔥 Championest 2025 🔥</h2>
                <p className="text-center">Tantang Dirimu, Raih Prestasi! </p>
                <form className="flex flex-col gap-4">
                    <FormInput type='email' label='Email' icon={<FaUser/>}/>
                    <FormInput type='password' label='Password' icon={<FaLock/>}/>
                    {isRegister ? (
                        <>
                            <FormInput type='password' label='Konfirmasi Password' icon={<FaLock/>} />
                            <button className="w-full bg-primary text-white py-2 btn btn-md mt-5 rounded-md hover:bg-accent transition duration-200">
                                Daftar
                            </button>
                        </>
                    ) : (
                        <button className="w-full bg-primary text-white py-2 btn btn-md mt-5 rounded-md hover:bg-accent transition duration-200">
                            Login
                        </button>
                    )}
                </form>
                {isRegister ? (
                    <p className="text-start mt-4">Sudah punya akun? <Link to="/login" className="text-blue-500">Login</Link></p>
                ) : (
                    <p className="text-start mt-4">Belum punya akun? <Link to="/register" className="text-primary">Daftar Sekarang</Link></p>
                )}
            </div>
        </div>
    )
}

export default FormAuth