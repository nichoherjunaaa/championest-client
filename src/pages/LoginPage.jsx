import React from 'react';
import FormAuth from '../components/FormAuth';
import { loginUser } from '../features/userSlice';
// import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import API from './../api';
import { redirect } from 'react-router-dom';

export const action = (store) => async ({ request }) => {
    const formInputData = await request.formData();
    // console.log(formInputData);
    const data = Object.fromEntries(formInputData);
    // console.log(data);
    try {
        const response = await API.post('/auth/login', data);
        console.log(response);
        store.dispatch(loginUser(response.data));
        toast.success('Login Berhasil')
        return redirect('/');
    } catch (error) {
        const errMsg = error?.response?.data?.message;
        // console.log(errMsg);
        toast.error(errMsg);
        return null
    }
};

const LoginPage = () => {
    return (
        <main>
            <FormAuth />
        </main>
    );
};

export default LoginPage;