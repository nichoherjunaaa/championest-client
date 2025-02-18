import React from 'react'
import FormInput from './../components/FormInput';
const TambahPage = () => {
    return (
        <div className=" bg-gray-200 h-[50vh] grid grid-cols-2 px-5 gap-5">
            <div>
                <h1>Produk Baru</h1>
                <form action="">
                    <FormInput type='text' label="Nama Produk" />
                    <FormInput type='number' label="Stok" />
                    <FormInput type="number" label="Harga"/>
                </form>
            </div>
            <div>
                <h1>Produk Baru</h1>
                <form action="">
                    <FormInput />
                    <FormInput />
                    <FormInput />
                    <FormInput />
                </form>
            </div>
        </div>
    )
}

export default TambahPage