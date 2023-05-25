import './App.css';
import HomePage from '../pages/HomePage/HomePage';
import Layout from '../containers/Layout';
import { Routes, Route} from 'react-router-dom';
import Error from '../pages/Error/Error';
import { AuthWindow } from '../components/AuthWindow/AuthWindow';
import {ProductCardPage} from '../pages/ProductCardPage/ProductCardPage';
import { Activate } from '../components/Activate/Activate';
import OrderPage from '../pages/OrderPage/OrderPage';
import CartPage from '../pages/CartPage/CartPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/login' element={<AuthWindow />} />
          <Route path='/product' element={<ProductCardPage />} />
          <Route path='/cart' element={<CartPage />} />
          {/* <Route path='/cabinet' element={<Cabinet />}>
              <Route path='/personal-info' element={<PersonalInfo />} />
              <Route path='/favorite' element={<Favorite />} />
          </Route> */}
          {/* <Route path='/product-list' element={<ProductList />} /> */}
			    <Route path='/login/activate/:uid/:token' element={<Activate/>} />
        </Route>
        <Route path='/order' element={<OrderPage />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
