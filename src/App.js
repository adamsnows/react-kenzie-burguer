import { useState, useEffect } from 'react'
import api from './services/Api';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart'
import Header from './components/Header';
import Loader from './components/Loader';
import { ToastContainer } from 'react-toastify'


function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    api.get('/products').then(res => {
      setProducts(res.data)
      setFilteredProducts(res.data)
    }).catch(err => console.log(err)).finally(setLoading(false))
  }, [])

  return (
    <>
      <Header setFilteredProducts={setFilteredProducts} products={products} />
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <main className='containerao'>
        {loading ? <Loader /> : <ProductsList filteredProducts={filteredProducts} setCurrentSale={setCurrentSale} currentSale={currentSale} products={products} loading={loading} />}
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </main>
    </>
  );
}

export default App;
