import React from 'react'
import { useLoaderData, Link } from 'react-router-dom';
import API from './../api';
import CardProduct from '../components/CardProduct';
import { useSelector } from 'react-redux';

export const loader = async ({ request }) => {
    const url = new URL(request.url)
    const params = Object.fromEntries(new URLSearchParams(url.search))
    params.limit = 8
    try {
        const { data } = await API.get('/product', { params })
        // console.log(data);
        const products = data.data
        // console.log(products);
        const pagination = data.pagination
        // console.log(pagination); 
        return { products, pagination, params }
    } catch (error) {
        console.error('api error', error);
        return
    }
}
const LombaPage = () => {
    const { products, pagination } = useLoaderData()
    const user = useSelector(state => state.userState.user)
    // console.log(user);
    return (
        <>
            {
                user && user.role == 'admin' && (
                    <div className="flex justify-end">
                        <Link className="btn btn-primary btn-md" to="/kompetisi/new" >Tambah Kompetisi</Link>
                    </div>
                )
            }
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 grid-cols-1">
                {
                    !products.length ? (
                        <div>
                            <h1>Maaf, yang anda cari tidak ditemukan</h1>
                        </div>
                    ) : (
                        products.map(product => (
                            <CardProduct item={product} key={product._id} />
                        ))
                    )
                }
            </div>
        </>
    )
}

export default LombaPage