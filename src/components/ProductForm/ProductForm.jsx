import { useRef, useState } from 'react'
import TextInput from '../common/TextInput/TextInput'
import Radio from '../common/Radio/Radio'
import Checkbox from '../common/Checkbox/Checkbox'
import Dropdown from '../common/Dropdown/Dropdown'
import Button from '../common/Button/Button'
import styles from './ProductForm.module.css'
import uploadIcon from '../../icons/file_upload.svg'



const ProductForm = ({ setProducts }) => {

    const addProduct = (newProduct) => {
        setProducts((currentProducts) => [...currentProducts, newProduct])
    }
    const initial = {
        name: '',
        stock: '',
        price: '',
        description: '',
        currency:"USD",
        category: 'Electronic',
        sellType: 'customer',
        region: 'India',
        customizable: false,
        returnable: false,
        image: '',
        id: '',
    }

    const [form, setForm] = useState(initial)
    const [isLoading, setIsLoading] = useState(false)
    const fileInputRef = useRef(null)

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setForm(prev => ({ ...prev, image: reader.result }))
            }
            reader.readAsDataURL(file)
        }
    }

    const handleRemoveImage = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
        setForm((prev) => ({ ...prev, image: '' }))
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        await delay(1000)

        const productWithId={
            ...form,
            id:crypto.randomUUID(), 
        }
        addProduct(productWithId)
        setForm(initial)
        setIsLoading(false)
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
                    placeholder="0"
                />
                <div className={styles.priceRow}>
                    <label htmlFor="price" className={styles.priceLabel}>Price</label>
                    <div className={styles.priceField}>
                <input
                    type="number"
                    label="price"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="0"
                    className={styles.priceInput}
                />
                <select
                    name="currency"
                    value={form.currency}
                    onChange={handleChange}
                    className={styles.currencySelect}
                >
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                </select>
                    </div>
                </div>
                <div className={styles.fullWidth}>
                    <TextInput
                        type="text"
                        label="description"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Enter Description"
                        multiline
                    />
                </div>
                <div className={styles.fullWidth}>
                    <label className={styles.imageLabel}>
                        Media
                    </label>
                    <div className={styles.fileInputContainer}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className={styles.fileInput}
                            ref={fileInputRef}
                        />
                        {form.image ? (
                            <div className={styles.imagePreviewContainer}>
                                <button
                                    type="button"
                                    className={styles.removePreviewButton}
                                    onClick={handleRemoveImage}
                                    aria-label="Remove preview image"
                                >
                                    ×
                                </button>
                                <img src={form.image} alt="Preview" className={styles.imagePreview} />
                            </div>
                        ) : (
                            <div className={styles.uploadText}><img src={uploadIcon} alt="upload" />Click to Upload Image</div>
                        )}
                    </div>
                </div>
                <Radio
                    name="sellType"
                    label="customer"
                    value='customer'
                    checked={form.sellType === 'customer'}
                    onChange={handleChange}
                />
                <Radio
                    name="sellType"
                    label="franchise"
                    value='franchise'
                    checked={form.sellType === 'franchise'}
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
                        label={isLoading ? "Adding..." : "Add Product"}
                        onClick={handleSubmit}
                        disabled={isLoading}
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
