import React, { useState } from 'react'


import { IProduct } from '../Products/products.slice'
import { addProductToStore } from '../Products/products.slice'
import { useAppDispatch } from '../../Redux/store.hook'

const ProductForm: React.FC = () => {

    const dispatch = useAppDispatch();

    const [product, setProduct] = useState<IProduct>({
        id: '',
        title: '',
        price: 0
    });


    const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProduct(prevProduct => {
            return {
                ...prevProduct,
                [name]: value
            }
        })
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(addProductToStore(product));
    }


    return (
        <div>
            <h2>
                Add game to store
            </h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder='ID'
                        name='id'
                        value={product.id}
                        onChange={handelChange}
                    />
                    <input type="text"
                        placeholder='Game title'
                        name='title'
                        value={product.title}
                        onChange={handelChange}
                    />
                    <input type="number"
                        placeholder='price'
                        name='price'
                        value={product.price}
                        onChange={handelChange}
                    />
                    <button type='submit'>Add </button>
                </form>

            </div>
        </div>
    )
}

export default ProductForm