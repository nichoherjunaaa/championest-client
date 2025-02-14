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
        addProduct: (state, action) => {
            // console.log(state.cartTotal);

            const { product } = action.payload;
            const item = state.CartItems.find(i => i.cartId === product.cartId);

            if (item) {
                const prevAmount = item.amount;  // Menyimpan jumlah lama produk
                item.amount += product.amount;  // Menambah jumlah produk
                state.numItemsCart += product.amount;  // Update jumlah total item
                state.cartTotal += product.price * (product.amount - prevAmount);  // Update total harga
            } else {
                state.CartItems.push(product);
                state.numItemsCart += product.amount;
                state.cartTotal += product.price * product.amount;
            }

            // Simpan ke localStorage setelah update state
            localStorage.setItem('cart', JSON.stringify(state));
            toast.success('Produk ditambahkan ke keranjang');
            console.log(state.cartTotal);
        },
        clearCartItems: (state) => {
            localStorage.setItem('cart', JSON.stringify(defaultValue));
            return defaultValue
        },
        editCartItems: (state, action) => {
            const { cartId, amount } = action.payload;
            const itemProduct = state.CartItems.find(i => i.cartId === cartId);
            state.numItemsCart += amount - itemProduct.amount;
            state.cartTotal += (amount - itemProduct.amount) * itemProduct.price;
            itemProduct.amount = amount;
            localStorage.setItem('cart', JSON.stringify(state));
            // toast.success('Jumlah produk diubah');
        },
        removeItem : (state, action) => {
            const { cartId } = action.payload;
            const itemProduct = state.CartItems.find(i => i.cartId === cartId);
            state.CartItems = state.CartItems.filter(i => i.cartId !== cartId);
            state.numItemsCart -= itemProduct.amount;
            state.cartTotal -= itemProduct.price * itemProduct.amount;
            localStorage.setItem('cart', JSON.stringify(state));
            toast.success('Produk dihapus dari keranjang');
        }

    },
});

export const { addProduct, clearCartItems, editCartItems, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
