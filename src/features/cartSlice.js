import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultValue = {
    CartItems: [],
    numItemsCart: 0,
    cartTotal: 0,
};

const getCartLocalStorage = () => {
    try {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : defaultValue;
    } catch (error) {
        console.error('Error parsing localStorage:', error);
        return defaultValue;
    }
};

const saveCartToLocalStorage = (state) => {
    localStorage.setItem('cart', JSON.stringify(state));
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: getCartLocalStorage(),
    reducers: {
        addProduct: (state, action) => {
            const { product } = action.payload;
            const item = state.CartItems.find(i => i.cartId === product.cartId);

            state.numItemsCart = state.numItemsCart || 0;
            state.cartTotal = state.cartTotal || 0;

            if (item) {
                const prevAmount = item.amount;
                item.amount += product.amount;
                state.numItemsCart += product.amount;
                state.cartTotal += product.price * (product.amount);
            } else {
                state.CartItems.push(product);
                state.numItemsCart += product.amount;
                state.cartTotal += product.price * product.amount;
            }

            saveCartToLocalStorage(state);
            toast.success('Produk ditambahkan ke keranjang');
        },

        clearCartItems: (state) => {
            saveCartToLocalStorage(defaultValue);
            return { ...defaultValue };
        },

        editCartItems: (state, action) => {
            const { cartId, amount } = action.payload;
            const itemProduct = state.CartItems.find(i => i.cartId === cartId);

            if (itemProduct) {
                const amountDifference = amount - itemProduct.amount;

                state.numItemsCart += amountDifference;
                state.cartTotal += amountDifference * itemProduct.price;

                itemProduct.amount = amount;

                saveCartToLocalStorage(state);
                toast.success('Jumlah produk diperbarui');
            }
        },

        removeItem: (state, action) => {
            const { cartId } = action.payload;
            const itemProduct = state.CartItems.find(i => i.cartId === cartId);

            if (itemProduct) {
                state.numItemsCart = Math.max(0, (state.numItemsCart || 0) - itemProduct.amount);
                state.cartTotal = Math.max(0, (state.cartTotal || 0) - itemProduct.price * itemProduct.amount);

                state.CartItems = state.CartItems.filter(i => i.cartId !== cartId);

                saveCartToLocalStorage(state);
                toast.success('Produk dihapus dari keranjang');
            }
        },
    },
});

export const { addProduct, clearCartItems, editCartItems, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
