import ProductCard from "./common/ProductCard"
import styles from "./WishList.module.css"

const WishList = ({ wish = [] }) => {
    return(
      <div className={styles.container}>
        <div className={styles.header}>
            <h2 className={styles.title}>Your Wishlist</h2>
            <span className={styles.badge}>{wish.length} items</span>
        </div>
        
        {wish.length === 0 ? (
            <div className={styles.empty}>Your wishlist is currently empty. Add products from the Inventory!</div>
        ) : (
            <div className={styles.list}>
                {wish.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        )}
      </div>
    )
}

export default WishList