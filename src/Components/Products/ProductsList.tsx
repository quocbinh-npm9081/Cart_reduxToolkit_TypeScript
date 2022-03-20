import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../Redux/store.hook';

import { getProducts } from './products.slice';
import { removeProductInStore } from '../Products/products.slice';
import { IProduct } from './products.slice';

import { addToCart } from '../Cart/Cart.slice';


const ProductsList: React.FC = () => {


    const dispatch = useAppDispatch();

    const products = useSelector(getProducts);
    // const [products, setProducts] = useState<IProduct[]>([]);



    const onRemoveProductInStore = (id: string) => {
        dispatch(removeProductInStore(id))
    }

    const onAddProductToCart = (product: IProduct) => {
        dispatch(addToCart(product));
    }


    return (
        <div>
            <h2>
                Game List
            </h2>
            {
                products.map((product, index) => (
                    <div key={index}>
                        {
                            product.title
                        }
                        <span>
                            {product.price}
                        </span>
                        <button
                            onClick={() => onRemoveProductInStore(product.id)}
                        >Remove Product</button>

                        <button
                            onClick={() => onAddProductToCart(product)}
                        >Add To Cart</button>
                    </div>

                ))
            }

        </div>
    )
}

export default ProductsList;