import styles from './ProductCard.module.css'

const ProductCard = ({
    name,
    price,
    category,
    region,
    stock,
})=>{
    return(
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.name}>{name}</h3>
                <span className={styles.price}>${price}</span>
            </div>
            
            <div className={styles.body}>
                <div className={styles.detail}>
                    <span>Category:</span>
                    <span>{category}</span>
                </div>
                <div className={styles.detail}>
                    <span>Region:</span>
                    <span>{region}</span>
                </div>
                <span className={`${styles.stockBadge} ${stock <= 10 ? styles.lowStock : styles.highStock}`}>
                    {stock <= 10 ? 'Low Stock' : 'High Stock'}
                </span>
            </div>
        </div>
    )
}

export default ProductCard