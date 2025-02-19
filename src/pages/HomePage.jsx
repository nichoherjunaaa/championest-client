import API from '../api'
import CardProduct from '../components/CardProduct';
import Carousel from '../components/Carousel'
import { useLoaderData, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const loader = async (request) => {
    const { data } = await API.get('/product')
    const products = data.data
    return { products }
}

const HomePage = () => {
    const { products } = useLoaderData()
    // console.log(products);
    const user = useSelector(state => state.userState.user)
    return (
        <>
            <div className="body-home flex flex-col gap-7">
                <div className="text-center py-10 bg-primary text-white">
                    <h1 className="text-4xl font-bold">🔥 Championest 2025 – Tantang Dirimu, Raih Prestasi! 🔥</h1>
                    <p className="text-lg mt-3 max-w-2xl mx-auto p-6 text-center">
                        Bergabunglah dalam ajang kompetisi terbesar tahun ini! Dapatkan kesempatan memenangkan hadiah menarik dan tunjukkan kemampuan terbaikmu!
                    </p>
                    <Link to="/kompetisi" className="mt-5 inline-block bg-secondary px-6 py-3 text-lg font-semibold rounded-lg hover:bg-accent transition">Lihat Kompetisi</Link>
                </div>
                <div>
                    {/* <Hero/> */}
                    <Carousel />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 grid-cols-1">
                    {products?.map(item => (
                        <CardProduct item={item} key={item._id} user = {user} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default HomePage

