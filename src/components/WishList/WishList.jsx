import ProductCard from "../common/ProductCard/ProductCard"
import styles from "./WishList.module.css"


const WishList = ({ wish = [], handleDelete }) => {

    
    return(
      <div className={styles.container}>
        <div className={styles.header}>
            <h2 className={styles.title}>
                <img src='src/icons/redHeart.svg' alt="heart" />
                Priority Wishlist</h2>
            <span className={styles.badge}>{wish.length} items</span>
        </div>
        
        {wish.length === 0 ? (
            <div className={styles.empty}>Empty Wishlist</div>
        ) : (
            <div className={styles.list}>
                {wish.map((product) => (
                    <ProductCard key={product.id} {...product} onRemove={handleDelete} />
                ))}
            </div>
        )}
      </div>
    )
}

export default WishList