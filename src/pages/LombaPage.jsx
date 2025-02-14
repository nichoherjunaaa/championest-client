import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import API from './../api';
import CardProduct from '../components/CardProduct';
import { useSelector } from 'react-redux';

export const loader = async ({ request }) => {
    const url = new URL(request.url);
    const params = Object.fromEntries(new URLSearchParams(url.search));
    params.limit = 8;
    try {
        console.log(params);
        const { data } = await API.get('/product', { params });
        const products = data.data;
        const pagination = data.pagination;
        return { products, pagination, params };
    } catch (error) {
        console.error('API error', error);
        return { products: [], pagination: null, params };
    }
};

const LombaPage = () => {
    const { products, pagination, params } = useLoaderData();
    const user = useSelector(state => state.userState.user);

    return (
        <>
            {user && user.role === 'admin' && (
                <div className="flex justify-end">
                    <Link className="btn btn-primary btn-md" to="/kompetisi/new">Tambah Kompetisi</Link>
                </div>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 grid-cols-1">
                {!products.length ? (
                    <div className="flex items-center justify-center h-full text-center col-span-full">
                        <h1 className="p-4 text-black rounded-lg">
                            Maaf, yang Anda cari tidak ditemukan untuk pencarian "{params.nama}"
                        </h1>
                    </div>
                ) : (
                    products.map(product => (
                        <CardProduct item={product} key={product._id} user={user} />
                    ))
                )}
            </div>
        </>
    );
};

export default LombaPage;
