import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../../Redux/store'


export interface IProduct {
    id: string
    title: string,
    price: number
}


const initialState = [{
    id: '123',
    title: 'Escape from tarkov',
    price: 40
}, {
    id: '435',
    title: 'Hunt: Shawdown',
    price: 100
}]

const productsSlide = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProductToStore: (state, action: PayloadAction<IProduct>) => {
            // state.push((action.payload)) show on bottom
            return [action.payload, ...state] //show on top
        },
        removeProductInStore: (state, action: PayloadAction<string>) => {
            return state.filter(item => item.id !== action.payload);
        },
    }
})

export const { addProductToStore, removeProductInStore } = productsSlide.actions;
export const getProducts = (state: RootState) => state.Products;


export default productsSlide.reducer;