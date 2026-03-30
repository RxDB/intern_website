import styles from './ProductCard.module.css'

const ProductCard = ({
    name,
    price,
    category,
    region,
    stock,
    image,
    onRemove
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.wishlistImage}>
                <img  src={image} alt={name} />
                </div>
            </div>

            <div className={styles.body}>
                <div className={styles.detail}>
                <h3 className={styles.name}>{name}</h3>
                <span className={styles.price}>${price}</span>
                    <span>Category:</span>
                    <span>{category}</span>
                </div>
                <div className={styles.detail}>
                    <span>Region:</span>
                    <span>{region}</span>
                </div>

                <div className={styles.stockContainer}>
                <span className={`${styles.stockBadge} ${stock <= 10 ? styles.lowStock : styles.highStock}`}>
                    {stock <= 10 ? 'Low Stock' : 'High Stock'}
                </span>
                <img
                    src='src/icons/trash-2-16.png'
                    onClick={()=>onRemove(name)}
                    className={styles.deleteIcon}
                />
                </div>
            </div>
        </div>
    )
}

export default ProductCard