import { configureStore } from '@reduxjs/toolkit';

import Products from '../Components/Products/products.slice';
import Cart from '../Components/Cart/Cart.slice';
export const store = configureStore({
    reducer: {
        Products,
        Cart
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;