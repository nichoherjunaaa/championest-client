import API from '../api'
// import CartProduct from '../components/CardProduct'
// import Hero from '../components/Hero'
import Carousel from '../components/Carousel'

const HomePage= () => {
    return (
        <>
            <div>
                {/* <Hero/> */}
                <Carousel />
            </div>
            <div className="border-b border-primary pb-5 mt-5">
                <h2 className="text-2xl font-bold capitalize">
                    Daftar Produk
                </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 grid-cols-2">
                {/* {products.map(item => (
                    <CartProduct item={item} key={item._id} user={user} />
                ))} */}
            </div>
        </>
    )
}

export default HomePage