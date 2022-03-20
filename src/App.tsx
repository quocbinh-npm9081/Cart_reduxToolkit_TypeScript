import './App.css';

import { Provider } from 'react-redux'
import { store } from './Redux/store'



import ProdcutsList from './Components/Products/ProductsList'
import ProductForm from './Components/ProductForm/ProductForm';
import Cart from './Components/Cart/Cart';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProdcutsList />
        <ProductForm />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
