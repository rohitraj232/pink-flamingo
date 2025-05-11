import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Products from './pages/allProducts/Products';
import ProductDetails from './pages/productDetails/ProductDetails';
import Layout from './layout/Layout';
import Home from './pages/home/Home';



function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products /> } />
          <Route path="product-details" element={<ProductDetails />} />
        </Route>
      </Routes>
     
    </>
  )
}

export default App
