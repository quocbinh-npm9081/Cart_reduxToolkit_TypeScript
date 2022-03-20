import React from 'react';
import { useSelector } from 'react-redux';
import { getProdcutInCart, removeProductInCart, getTotalPrice } from './Cart.slice';
import { useAppDispatch } from '../../Redux/store.hook';
const Cart = () => {

    const dispatch = useAppDispatch();

    const products = useSelector(getProdcutInCart);
    const totalPrice = useSelector(getTotalPrice);
    const handleRemove = (id: string) => {
        dispatch(removeProductInCart(id));
    }

    return (
        <div>
            <ul>{
                products.map((product, index) => (
                    <li key={index}>
                        {product.title}
                        <span>
                            {product.amount}
                        </span>
                        <button
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                    </li>
                ))
            }</ul>

            <div>Total Priec: {totalPrice}</div>
        </div>
    )
}

export default Cart;