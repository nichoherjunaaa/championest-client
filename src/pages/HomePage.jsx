import API from '../api'
import CardProduct from '../components/CardProduct';
import Carousel from '../components/Carousel'
import { useLoaderData } from 'react-router-dom';

export const loader = async (request) => {
    const { data } = await API.get('/product')
    const products = data.data
    return { products }
}

const HomePage = () => {
    const { products } = useLoaderData()
    console.log(products);
    
    return (
        <>
            <div>
                {/* <Hero/> */}
                <Carousel />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 grid-cols-1">
                {products.map(product => (
                    <CardProduct item={product} key={product.id}/>
                ))}
            </div>
            
        </>
    )
}

export default HomePage