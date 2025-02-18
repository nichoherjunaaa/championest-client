import React from 'react'
import FormInput from './../components/FormInput';
import FormText from '../components/FormText';
const TambahPage = () => {
    return (
        <div className=" h-[70vh] justify-center items-center">
            <div className="w-full flex items-center justify-center">
                <div className="w-1/2 bg-gray-300">
                    {/* <h1>Produk Baru</h1> */}
                    <form action="" className="flex flex-col gap-2 m-7">
                        <input type="file" className="file-input w-full mt-4" />
                        <FormInput type='text' label="Nama Produk" />
                        <FormInput type='number' label="Stok" />
                        <FormInput type="number" label="Harga" />
                        <FormText type="text" label="Deskripsi"/>
                        <button className="btn btn-primary mt-5">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TambahPage