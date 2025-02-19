import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import API from "./../api";
import { toast } from "react-toastify";
import { useRevalidator } from "react-router-dom";

const Dialog = ({ onClose, item }) => {
    const { revalidate } = useRevalidator();

    const handleDelete = async (item) => {
        console.log(item._id);
        try {
            const response = await API.delete(`/product/${item._id}`);
            console.log(response);
            toast.success("Produk berhasil dihapus");
            revalidate();
            onClose();
        } catch (error) {
            toast.error("Gagal menghapus produk");
            console.error("Error deleting product:", error);
        }
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg lg:w-1/4 w-3/4">
                <h2 className="text-lg font-bold mb-4">Konfirmasi</h2>
                <p>Apakah Anda yakin ingin menghapus <strong>{item.nama}</strong>?</p>
                <div className="mt-4 flex justify-end gap-2">
                    <button onClick={onClose} className="btn btn-success btn-md w-24">
                        Batal
                    </button>
                    <button onClick={() => handleDelete(item)} className="btn btn-error btn-md w-24">
                        Hapus
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Dialog;
