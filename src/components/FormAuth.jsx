import React from 'react'
import FormInput from '../components/FormInput';
import { Form } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const FormAuth = ({ isRegister = false }) => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <div className="w-full max-w-md bg-base-300 shadow-lg rounded-lg p-6">
                <h2 className="lg:text-3xl text-2xl font-bold text-center mb-4">🔥 Championest 2025 🔥</h2>
                <p className="text-center">Tantang Dirimu, Raih Prestasi! </p>
                <Form className="flex flex-col gap-4" action="" method="post">
                    {isRegister && (
                        <FormInput type='text' label='Username' name='username' icon={<FaUser />} />
                    )}
                    <FormInput type='email' label='Email' name='email' icon={<FaUser />} />
                    <FormInput type='password' label='Password' name='password' icon={<FaLock />} />

                    <button className="w-full bg-primary text-white py-2 btn btn-md mt-5 rounded-md hover:bg-accent transition duration-200">
                        {isRegister ? 'Daftar' : 'Login'}
                    </button>
                </Form>
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