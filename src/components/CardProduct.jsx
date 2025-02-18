import React, { useState } from 'react';
import { formatHarga } from '../utils';
import { Link, useRevalidator } from 'react-router-dom';
import { FaTrash, FaEdit } from "react-icons/fa";
import Dialog from './Dialog';

const CardProduct = ({ item, user }) => {
    const [showDialog, setShowDialog] = useState(false);

    const handleClick = () => {
        setShowDialog(true); // Menampilkan dialog saat ikon trash diklik
    };

    const handleClose = () => {
        setShowDialog(false); // Menutup dialog
    };

    return (
        <div className="card bg-base-300 w-full sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
            <figure>
                <div className="relative w-full aspect-[3/4]">
                    <img
                        src={item.gambar}
                        alt={item.nama}
                        className="w-full h-full object-cover rounded-t-lg"
                    />
                    {item.stok < 1 && (
                        <span className="absolute top-0 right-0 bg-error text-xs sm:text-sm lg:text-xl rounded-md font-bold p-2">Sold Out</span>
                    )}
                </div>
            </figure>
            <div className="card-body p-3 sm:p-5 flex flex-col">
                {user && user.role === "admin" && (
                    <div className="flex justify-end gap-x-2 sm:gap-x-3">
                        <FaTrash onClick={handleClick} className="text-red-500 cursor-pointer text-sm sm:text-base lg:text-xl" />
                        <Link>
                            <FaEdit className="text-info cursor-pointer text-sm sm:text-base lg:text-xl" />
                        </Link>
                    </div>
                )}
                <h2 className="card-title text-sm sm:text-lg lg:text-2xl font-bold">{item.nama}</h2>
                <p className="font-bold text-primary text-xs sm:text-sm lg:text-xl">{formatHarga(item.harga)}</p>
                <p className="text-xs sm:text-sm lg:text-lg hidden lg:block">
                    {item.deskripsi.length > 50
                        ? `${item.deskripsi.substring(0, 50)}...`
                        : item.deskripsi}
                </p>
                <div className="card-actions justify-start mt-3 sm:mt-5 items-center">
                    <Link to={`/kompetisi/detail/${item._id}`} className="btn btn-primary btn-sm sm:btn-sm h-9 lg:btn-lg flex justify-center items-center text-center w-full">
                        Detail
                    </Link>
                </div>
            </div>
            {showDialog && <Dialog onClose={handleClose} item={item} />}
        </div>
    );
};

export default CardProduct;
