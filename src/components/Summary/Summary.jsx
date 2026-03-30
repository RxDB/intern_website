import styles from './Summary.module.css'

const Summary = ({ products = [] }) => {
    const product = products.length;

    let stock = 0;
    products.forEach((item) => {
        stock += Number(item.stock || 0);
    })
    return (

        <div className={styles.summary}>
            <div className={styles.summaryHeader}>
                <div className={styles.summaryTitle}>ARCHITECT DASHBOARD</div>
                <div className={styles.summaryDescription}>Operational Overview & 
                    Inventory Control
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.label}>Total Products</div>
                <div className={styles.value}>{product}</div>
            </div>
            <div className={styles.card}>
                    <div className={styles.label}>Total Stock</div>
                <div className={styles.value}>{stock}</div>
            </div>
        </div>
    )
}

export default Summary