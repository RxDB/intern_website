import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import ProductForm from './components/ProductForm'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Summary from './components/Summary'
import ProductTable from './components/ProductTable'
import WishList from './components/WishList'

import styles from './main.module.css'

const App = () => {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  return (
    <div className={styles.appContainer}>
      <Navbar />
      <div className={styles.contentContainer}>
        <Sidebar />
        <ProductForm setProducts={setProducts} products={products} />
        <div className={styles.mainContent}>
          <Summary products={products} />
          <WishList wish={wishlist} />
          <ProductTable products={products} addWishlist={addWishlist} />
        </div>
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
