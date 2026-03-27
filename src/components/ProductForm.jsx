import { useState } from 'react'
import TextInput from './common/TextInput'
import Radio from './common/Radio'
import Checkbox from './common/Checkbox'
import Dropdown from './common/Dropdown'
import Button from './common/Button'
import styles from './ProductForm.module.css'



const ProductForm = ({ products, setProducts }) => {

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct])
    }
    const initial = {
        name: '',
        stock: '',
        price: '',
        description: '',
        category: '',
        currency: '',
        sellType: '',
        region: '',
        customizable: false,
        returnable: false,
    }

    const [form, setForm] = useState(initial)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(form)
        setForm(initial)
    }

    return (
        <div className={styles.formContainer}>
            <h2 className={styles.title}>Add New Product</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.fullWidth}>
                    <TextInput
                        type="text"
                        label="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="eg: Fitbit X"
                    />
                </div>
                <Dropdown
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    options={[
                        { value: "Electronic", label: "Electronic" },
                        { value: "Food", label: "Food" },
                        { value: "Clothing", label: "Clothing" },
                        { value: "Furniture", label: "Furniture" },
                        { value: "Beauty", label: "Beauty" },
                        { value: "Sports", label: "Sports" },
                    ]}
                />
                <Dropdown
                    name="region"
                    value={form.region}
                    onChange={handleChange}
                    options={[
                        { value: "India", label: "India" },
                        { value: "US", label: "US" },
                        { value: "Europe", label: "Europe" },
                    ]}
                />
                <TextInput
                    type="number"
                    label="stock"
                    name="stock"
                    value={form.stock}
                    onChange={handleChange}
                    placeholder="Enter Stock"
                />
                <TextInput
                    type="number"
                    label="price"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="Enter Price"
                />
                <div className={styles.fullWidth}>
                    <TextInput
                        type="text"
                        label="description"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Enter Description"
                    />
                </div>
                <Radio
                    name="sellType"
                    label="customer"
                    value='customer'
                    onChange={handleChange}
                />
                <Radio
                    name="sellType"
                    label="franchise"
                    value='franchise'
                    onChange={handleChange}
                />
                <Checkbox
                    name="customizable"
                    label="customizable"
                    checked={form.customizable}
                    onChange={handleChange}
                />
                <Checkbox
                    name="returnable"
                    label="returnable"
                    checked={form.returnable}
                    onChange={handleChange}
                />
                <div className={styles.buttonGroup}>
                    <Button
                        type='submit'
                        label="Add Product"
                        onClick={handleSubmit}
                    />
                    <Button
                        type='button'
                        label="Reset"
                        onClick={() => setForm(initial)}
                    />
                </div>


            </form>
        </div>
    )
}

export default ProductForm