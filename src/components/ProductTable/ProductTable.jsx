import { useState } from 'react';
import TextInput from '../common/TextInput/TextInput';
import styles from './ProductTable.module.css';

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
                    {filteredProducts.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.stock}</td>
                            <td
                                style={{
                                    color:product.price < 100 ? 'green' : 
                                    100<product.price<300 ? 'yellow' : 
                                    301<product.price<500 ? 'orange' : 'red'
                                }}
                            >{product.price}</td>
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
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable