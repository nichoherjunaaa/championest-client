import React from 'react'
import { useSelector } from 'react-redux';
import CartList from '../components/CartList';
import { Link } from 'react-router-dom';
import { formatHarga } from '../utils'
import EmptyIcon from '../assets/ilustration/emptycart.png'
const CartPage = () => {
    const user = useSelector(state => state.userState.user)
    const cart = useSelector(state => state.cartState)
    // console.log(cart);
    if (cart.numItemsCart === 0) {
        return (
            <>
                <div className="flex items-center justify-center w-full flex-col">
                    <img src={EmptyIcon} alt="" className="w-56 lg:w-1/3"/>
                    <h1 className="text-center lg:text-3xl w-full h-full text-md">Keranjang kamu masih kosong nih...</h1>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="border-b border-primary pb-5 mt-5">
                <h2 className="text-2xl font-bold capitalize">Keranjang Saya</h2>
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                    <CartList />
                </div>
                <div className="lg:col-span-4 lg:pl-4">
                    <div className="card bg-base-300">
                        <div className="card-body">
                            <p className="flex justify-between text-sm pb-2">
                                <span>Total Belanja</span>
                                <span className="font-bold">{formatHarga(cart.cartTotal)}</span>
                            </p>
                        </div>
                    </div>
                    {user ? (
                        <Link to='/checkout' className="btn btn-primary btn-block mt-8">Checkout</Link>
                    ) : (
                        <Link to="/login" className="btn btn-primary btn-block mt-8">Login untuk Checkout</Link>
                    )}
                </div>
            </div>
        </>
    )
}

export default CartPage