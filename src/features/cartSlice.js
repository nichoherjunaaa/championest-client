import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultValue = {
    CartItems: [],
    numItemsCart: 0,
    cartTotal: 0,
}

const getCartLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cart')) || defaultValue
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: getCartLocalStorage(),
    reducers: {
        addProduct : (state, action) => {
            const { product } = action.payload
            const item = state.CartItems.find(i => i.cartId === product.cartId);


            if (item) {
                item.amount += product.amount
            } else {
                state.CartItems.push(product)
            }
            state.numItemsCart += product.amount
            state.cartTotal += product.price * product.amount
            localStorage.setItem('cart', JSON.stringify(state))
            toast.success('Produk ditambahkan ke keranjang')
        }
    }
})

export const { addProduct } = cartSlice.actions

export default cartSlice.reducer