import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../Products/products.slice";
import { RootState } from "../../Redux/store";

interface ICart extends IProduct {
    amount: number
}


const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as ICart[],
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const productIndex = state.findIndex(prodcut => prodcut.id === action.payload.id);

            if (productIndex !== -1) {
                state[productIndex].amount += 1;
                console.log(productIndex);

            } else {
                return [...state, { ...action.payload, amount: 1 }]
            }
        },
        removeProductInCart: (state, action: PayloadAction<string>) => {
            const productIndex = state.findIndex(prodcut => prodcut.id === action.payload);
            if (state[productIndex].amount === 1) {
                return state.filter(product => product.id !== action.payload)
            } else {
                state[productIndex].amount -= 1;
                return state;
            }
        }
    }
})

export const { addToCart, removeProductInCart } = cartSlice.actions;
export const getProdcutInCart = (state: RootState) => state.Cart;
export const getTotalPrice = (state: RootState) => state.Cart.reduce((total: number, prodcut) => {
    return total += prodcut.amount * prodcut.price;
}, 0)
export default cartSlice.reducer;


