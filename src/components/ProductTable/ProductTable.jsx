import { useState } from 'react';
import TextInput from '../common/TextInput/TextInput';
import Dropdown from '../common/Dropdown/Dropdown';
import styles from './ProductTable.module.css';

const getStockInfo = (stock) => {
    if (stock == 0) return { label: 'Out of stock', color: 'var(--content-red)' };
    if (stock < 10) return { label: 'Low stock', color: 'var(--content-yellow)'};
    if (stock < 50) return { label: 'Medium stock', color: 'var(--content-yellow)' };
    return { label: 'High stock', color: 'var(--content-green)'};
};

const getPriceStyle = (price) => {
    if (price < 100) return { color: 'var(--content-green)'};
    if (price <= 300) return { color: 'var(--content-yellow)'};
    if (price <= 500) return { color: 'var(--content-yellow)'};
    return { color: 'var(--content-red)'};
};

const ProductTable = ({ products = [], addWishlist }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const regionList = products.map((product) => product.region);
    const uniqueRegions = [...new Set(regionList)].filter(Boolean);
    const regionOptions = [
        { value: 'all', label: 'All Regions' },
        ...uniqueRegions.map((region) => ({
            value: region,
            label: region,
        })),
    ];

    const categoryList = products.map((product) => product.category);
    const uniqueCategories = [...new Set(categoryList)].filter(Boolean);
    const categoryOptions = [
        { value: 'all', label: 'All Categories' },
        ...uniqueCategories.map((category) => ({
            value: category,
            label: category,
        })),
    ];

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesRegion =
            selectedRegion === 'all' || product.region === selectedRegion;
            
        const matchesCategory =
            selectedCategory === 'all' || product.category === selectedCategory;

        return matchesSearch && matchesRegion && matchesCategory;
    });

    return (
        <div className={styles.container}>
            <div className={styles.headerRow}>
                <div className={styles.tabletext}>
                    Global Inventory
                </div>
                <div className={styles.controls}>
                    <div className={styles.searchContainer} >
                        <TextInput
                            type="text"
                            placeholder="Search products by name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className={styles.filters}>
                        <Dropdown
                            name="regionFilter"
                            label="Region"
                            value={selectedRegion}
                            onChange={(e) => setSelectedRegion(e.target.value)}
                            options={regionOptions}
                        />
                        <Dropdown
                            name="categoryFilter"
                            label="Category"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            options={categoryOptions}
                        />
                    </div>
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
                    {filteredProducts.map((product) => {
                        const stockInfo = getStockInfo(Number(product.stock) || 0);
                        const priceStyle = getPriceStyle(Number(product.price) || 0);
                        return (
                            <tr key={product.id}>
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
