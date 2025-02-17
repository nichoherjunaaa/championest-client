import { useSelector } from 'react-redux'
import { formatHarga } from '../utils'

const CartTotal = () => {
    const cart = useSelector(state => state.cartState)    

    return (
        <div className="grid grid-cols-1 gap-2">
            <div className="card bg-base-300">
                <div className="card-body">
                    <p className="text-sm pb-2 font-bold">Pesanan</p>
                    <div className="space-y-1">
                        {cart.CartItems.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm border-b pb-1">
                                <span>{item.name} x {item.amount}</span>
                                <span>{formatHarga((item.price * item.amount))}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="card bg-base-300">
                <div className="card-body">
                    <p className="flex justify-between text-sm pb-2 font-bold">
                        <span>Total Pembayaran</span>
                        <span>{formatHarga(cart.cartTotal)}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartTotal
