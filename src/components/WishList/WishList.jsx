import ProductCard from "../common/ProductCard/ProductCard"
import heartIcon from "../../icons/redHeart.svg"
import styles from "./WishList.module.css"


const WishList = ({ wish = [], handleDelete }) => {

    
    return(
      <div className={styles.container}>
        <div className={styles.header}>
            <h2 className={styles.title}>
                <img src={heartIcon} alt="" aria-hidden="true" className={styles.titleIcon} />
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
