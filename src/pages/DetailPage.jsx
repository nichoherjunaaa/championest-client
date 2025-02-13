import React from 'react'
import { useParams } from 'react-router-dom'
import API from './../api';
import { useState, useEffect } from 'react';
import { formatHarga, generateSelectAmount } from '../utils';
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/cartSlice';

const DetailPage = () => {
    let { id } = useParams()
    const [product, setProduct] = useState("")
    const [amount, setAmount] = useState(1);
    const dispatch = useDispatch()
    const dataLomba = async () => {
        try {
            // console.log(id);
            const { data } = await API.get(`/product/detail/${id}`)
            setProduct(data.data)
            console.log('Data received:', data);
        } catch (error) {
            console.log('Error getting data', error);
        }
    }

    const productCart = {
        cartId: product._id + product.nama,
        productId: product._id,
        image: product.gambar,
        name: product.nama,
        price: product.harga,
        stock: product.stok,
        amount
    }

    // console.log(productCart);
    

    const handleAmount = (e) => {
        setAmount(parseInt(e.target.value))
    }

    const cartHandle = () => {
        // console.log("Keranjang", product, amount);
        dispatch(addProduct({ product: productCart }))
    }

    useEffect(() => {
        dataLomba()
    }, [])

    return (
        <section className="px-4 sm:px-6 lg:px-8">
            <div className="card bg-base-300 shadow-xl flex flex-col lg:flex-row h-auto lg:h-[500px] mb-10">
                <figure className="flex-1">
                    <div className="relative w-full h-64 lg:h-full flex justify-center items-center">
                        <img
                            src={product.gambar}
                            alt={product.nama}
                            className="object-cover w-full h-full rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
                        />
                        {product.stock < 1 && (
                            <span className="absolute top-0 right-0 bg-error text-xl lg:text-3xl rounded-md font-bold p-2">
                                Sold Out
                            </span>
                        )}
                    </div>
                </figure>
                <div className="card-body flex-1 flex flex-col justify-between p-4 lg:p-6">
                    <div>
                        <h2 className="card-title text-xl lg:text-2xl">{product.nama}</h2>
                        <span className="text-2xl lg:text-3xl text-accent mt-2 font-bold">{formatHarga(product.harga)}</span>
                        <span className="badge badge-primary mt-2 mx-2 lg:mx-3">{product.category}</span>
                        <span className="mt-3 font-bold block">Kuota: {product.stok}</span>
                        <p className="mt-3 text-sm lg:text-base text-justify">{product.deskripsi}</p>
                    </div>
                    <div className="card-actions justify-end mt-4 lg:mt-0">
                        {product.stok > 0 && (
                            <div className="p-2 flex flex-col sm:flex-row lg:flex-col gap-4 w-full">
                                <label className="form-control w-1/3">
                                    <span className="capitalize label-text mb-3">Jumlah</span>
                                    <select
                                        name="amount"
                                        className="select select-bordered w-full"
                                    onChange={handleAmount}
                                    >
                                        {generateSelectAmount(product.stok)}
                                    </select>
                                </label>
                                    <button onClick={cartHandle} className="btn w-full btn-primary flex items-center justify-center gap-2 text-sm lg:text-base lg:btn-lg">
                                        <FaShoppingCart /> Keranjang
                                    </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailPage