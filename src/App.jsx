import { useState } from 'react'
import ProductForm from './components/ProductForm/ProductForm'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Summary from './components/Summary/Summary'
import ProductTable from './components/ProductTable/ProductTable'
import WishList from './components/WishList/WishList'
import styles from './app.module.css'

const App = () => {
  const [products, setProducts] = useState([])
  const [wishlist, setWishlist] = useState([])

  const addWishlist = (product) => {
    setWishlist((currentWishlist) => {
      if (currentWishlist.some((item) => item.id === product.id)) {
        return currentWishlist
      }
      return [...currentWishlist, product]
    })
  }

  const handleDelete = (id) => {
    setWishlist((currentWishlist) =>
      currentWishlist.filter((item) => item.id !== id)
    )
  }

  return (
    <div className={styles.appContainer}>
      <Navbar />
      <div className={styles.contentContainer}>
        <Sidebar />
        <div className={styles.mainContent}>

          <div className={styles.summaryArea}>
          <Summary products={products} />
          </div>

            <div className={styles.formArea}>
            <ProductForm setProducts={setProducts} />
            </div>

            <div className={styles.wishlistArea}>
            <WishList wish={wishlist} handleDelete={handleDelete} />
            </div>

            <div className={styles.productTableArea}>
            <ProductTable products={products} addWishlist={addWishlist} />
            </div>
        </div>
      </div>
      </div>
  )
}

export default App
