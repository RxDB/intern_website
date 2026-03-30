import { useState } from 'react';
import TextInput from '../common/TextInput/TextInput';
import styles from './ProductTable.module.css';

const getStockInfo = (stock) => {
    if (stock === 0) return { label: 'Out of stock', color: '#dc2626', fontSize: '0.8rem' };
    if (stock < 10) return { label: 'Low stock', color: '#ea580c', fontSize: '0.825rem' };
    if (stock < 50) return { label: 'Medium stock', color: '#ca8a04', fontSize: '0.85rem' };
    return { label: 'High stock', color: '#16a34a', fontSize: '0.875rem' };
};

const getPriceStyle = (price) => {
    if (price < 100) return { color: 'green', fontSize: '0.95rem', fontWeight: 600 };
    if (price <= 300) return { color: 'goldenrod', fontSize: '0.9rem', fontWeight: 600 };
    if (price <= 500) return { color: 'orange', fontSize: '0.875rem', fontWeight: 600 };
    return { color: 'red', fontSize: '0.85rem', fontWeight: 700 };
};

const ProductTable = ({ products = [], addWishlist }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <div className={styles.headerRow}>
                <div className={styles.tabletext}>
                    Global Inventory
                </div>
                <div className={styles.searchContainer} >
                    <TextInput
                        type="text"
                        placeholder="Search products by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Availablity</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Region</th>
                        <th>Customizable</th>
                        <th>WishList</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product, index) => {
                        const stockInfo = getStockInfo(product.stock);
                        const priceStyle = getPriceStyle(product.price);
                        return (
                            <tr key={index}>
                                <td>
                                    <div className={styles.productCell}>
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className={styles.productThumb}
                                            />
                                        ) : (
                                            <div className={styles.productThumbPlaceholder}>📦</div>
                                        )}
                                        <span>{product.name}</span>
                                    </div>
                                </td>
                                <td style={{ color: stockInfo.color, fontSize: stockInfo.fontSize, fontWeight: 600 }}>
                                    {stockInfo.label}
                                </td>
                                <td style={priceStyle}>
                                    ${product.price}
                                </td>
                                <td>{product.category}</td>
                                <td>{product.region}</td>
                                <td>{product.customizable ? 'Yes' : 'No'}</td>
                                <td>
                                    <button
                                        className={styles.actionButton}
                                        onClick={()=>addWishlist(product)}
                                    >Add</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable