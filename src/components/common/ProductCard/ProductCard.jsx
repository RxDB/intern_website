import styles from './ProductCard.module.css'
import trashIcon from '../../../icons/trash-2-16.png'

const ProductCard = ({
    name,
    price,
    category,
    region,
    stock,
    image,
    onRemove,
    id,
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.wishlistImage}>
                {image ? (
                    <img src={image} alt={name} />
                ) : (
                    <div className={styles.stockBadge}>No image</div>
                )}
                </div>
            </div>

            <div className={styles.body}>
                <div className={styles.detail}>
                    <h3 className={styles.name}>{name}</h3>
                    <div className={styles.price}>${price}</div>
                </div>
                <div className={styles.category}>{category}</div>

                <div className={styles.stockContainer}>
                <span className={`${styles.stockBadge} ${stock <= 10 ? styles.lowStock : styles.highStock}`}>
                    {stock == 0 ? 'Out of stock' : stock < 10 ? 'Low stock' : 'High stock'}
                </span>
                <img
                    src={trashIcon}
                    alt="Remove from wishlist"
                    onClick={()=>onRemove(id)}
                    className={styles.deleteIcon}
                />
                </div>
            </div>
        </div>
    )
}

export default ProductCard
