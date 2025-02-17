import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormInput from './../components/FormInput';
import CartTotal from './../components/CartTotal';

const insertSnapScript = () => {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = 'https://app.sandbox.midtrans.com/snap/snap.js'
        script.setAttribute("data-client-key", import.meta.env.VITE_MIDTRANS_CLIENT)
        script.onload = () => {
            resolve()
        }
        document.body.appendChild(script)
    })
}


const CheckoutPage = () => {
    const user = useSelector(state => state.userState.user);
    const carts = useSelector(state => state.cartState.CartItems);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCheckout = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // console.log("Form Data:", data);
        // console.log("Cart Items:", carts);

        const newArrayCart = carts.map(item => ({
            product: item.productId,
            quantity: item.amount
        }));

        // console.log("Processed Cart Items:", newArrayCart);
    };

    return (
        <>
            <div className="border-b border-primary pb-5 mt-5">
                <h2 className="text-2xl font-bold capitalize">Checkout</h2>
            </div>
            <div className="mt-8 grid gap-y-8 gap-x-2 lg:grid-cols-12">
                <div className="lg:col-span-8">
                    <form method="POST" className="bg-base-300 grid gap-y-5 p-5 rounded-2xl" onSubmit={handleCheckout}>
                        <div className="grid grid-cols-2 gap-x-4">
                            <FormInput label="First Name" type="text" name="firstname" />
                            <FormInput label="Last Name" type="text" name="lastname" />
                        </div>
                        <FormInput label="Email" type="email" name="email" defaultValue={user?.email || ''} />
                        <FormInput label="Phone" type="tel" name="phone" />
                        <button type="submit" className="btn btn-primary mt-8">Pesan</button>
                    </form>
                </div>
                <div className="lg:col-span-4 lg:pl-4">
                    <CartTotal />
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;