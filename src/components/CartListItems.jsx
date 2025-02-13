import React from 'react';
import { generateSelectAmount, formatHarga } from '../utils';
import { FaTrash } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import CartList from './CartListItems';

const CartListItems = ({ cartItem }) => {
    const { cartId, name, harga, image, amount, jumlah } = cartItem;
    // console.log(cartItem);
    const dispatch = useDispatch();

    return (
        <article key={cartId} className="mb-12 grid grid-cols-2 gap-4 sm:flex sm:flex-row sm:items-center flex-wrap border-b border-base-300 pb-6 last:border-b-0">
            <img src={image} alt={name} className="h-24 w-24 sm:w-32 sm:h-32 rounded-lg object-cover mx-auto sm:mx-0" />
            <div className="sm:ml-6 sm:w-48 text-center sm:text-left">
                <h2 className="capitalize font-semibold">{name}</h2>
                <span className="font-bold block mt-2">Jumlah Produk: {amount}</span>
                <p className="font-bold text-center sm:text-left mt-2">{formatHarga(harga)}</p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
                <div className="form-control w-full max-w-xs">
                    <select
                        name="amount"
                        className="select select-bordered w-full"
                        value={amount}
                    >
                        {generateSelectAmount(jumlah)}
                    </select>
                </div>
                <button className="mt-2 btn btn-secondary flex items-center justify-center w-full">
                    <FaTrash className="text-lg" />
                </button>
            </div>
        </article>
    );
};

export default CartListItems;
