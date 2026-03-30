import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import ProductForm from './components/ProductForm/ProductForm'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Summary from './components/Summary/Summary'
import ProductTable from './components/ProductTable/ProductTable'
import WishList from './components/WishList/WishList'

import styles from './main.module.css'

const App = () => {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addWishlist = (product) => {
    setWishlist((currentWishlist) => [...currentWishlist, product]);
  };
  
  const handleDelete = (name)=>{
    setWishlist(wishlist.filter(item=>item.name !== name))
  }
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <div className={styles.contentContainer}>
        <Sidebar />
        <ProductForm setProducts={setProducts} products={products} />
        <div className={styles.mainContent}>
          <Summary products={products} />
          <WishList wish={wishlist} handleDelete={handleDelete} />
          <ProductTable products={products} addWishlist={addWishlist} />
        </div>
      </div>
    </div>
  );
};

const container = document.getElementById('root')
if (!window.__reactRoot) {
  window.__reactRoot = createRoot(container)
}
window.__reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
